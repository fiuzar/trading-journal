"use server"

import { signIn } from "@/auth"
import { query } from "@/dbh"
import nodemailer from "nodemailer"
import bcrypt from "bcryptjs"

export async function googleSignIn() {
    await signIn("google", "/api/auth/check-user")
}

export async function credentialsAction(email, password) {

    if (!email || !password) {
        return { message: "Invalid details, please try again later" }
    }

    const formData = new FormData()
    formData.append("email", email)
    formData.append("password", password)

    try {
        await signIn("credentials", formData);
    } catch (err) {
        return { message: "Invalid details, please try again later" }
    }
}

export async function FirstSignup(email) {

    if (!email) {
        return { message: "Please input an email address" }
    }

    const pin = Math.floor(100000 + Math.random() * 900000).toString();

    try {

        const checkUserQuery = "SELECT * FROM trading_journal_users WHERE email = $1";
        const existingUser = await query(checkUserQuery, [email]);

        const { password } = existingUser.rows[0] || {}

        if (existingUser.rows.length > 0 && password !== "none") {
            return { message: "Email already exists, please use a different email" };
        }

        const { success } = await sendVerificationEmail(email, pin)

        if (!success) {
            throw new Error("couldn't send mail")
        }

        const date = new Date()

        const queryText = "INSERT INTO trading_journal_verify_email(email, pin, date) VALUES($1, $2, $3)";
        await query(queryText, [email, pin, date])

        return { success: true, message: "A one-time password has been sent to your email address" }

    } catch (error) {
        console.error("FirstSignup error:", error); // Improved error logging
        return { message: "Server error, please try again later" }
    }
}

export async function otpVerification(email, pin) {

    let queryText
    let result;

    if (!email || !pin) {
        return { success: false, message: "Please input your OTP and email" };
    }

    const checkUserQuery = "SELECT * FROM trading_journal_users WHERE email = $1";
    const existingUser = await query(checkUserQuery, [email]);

    const { password } = existingUser.rows[0] || {}

    if (existingUser.rows.length > 0 && password !== "none") {
        return { message: "Email already exists, please use a different email" };
    }

    try {
        queryText = "SELECT * FROM trading_journal_verify_email WHERE email = $1 ORDER BY date DESC LIMIT 1";
        result = await query(queryText, [email]);
        const latestRecord = result.rows[0];

        if (!latestRecord) {
            return { success: false, message: "Invalid email or OTP" };
        }

        const previous_time = new Date(latestRecord.date).getTime();
        const current_time = new Date().getTime();
        const expiry_duration = 15 * 60 * 1000;
        const token_duration = current_time - previous_time;

        if (token_duration > expiry_duration) {
            return { success: false, message: "OTP has expired, please request a new one" };
        }

        if (latestRecord.pin !== pin) {
            return { success: false, message: "Invalid OTP, please try again" };
        }

        const deleteQuery = "DELETE FROM trading_journal_verify_email WHERE email = $1";
        await query(deleteQuery, [email]);

        if (existingUser.rows.length > 0 && password === "none") {
            const updateQuery = "UPDATE trading_journal_users SET password = $1 WHERE email = $2";
            await query(updateQuery, ["none", email]);
            return { success: true, message: "OTP verified successfully" };
        }

        const insertUserPlaceholder = "INSERT INTO trading_journal_users(name, email, password) VALUES($1, $2, $3)";
        await query(insertUserPlaceholder, ["none", email, "none"]);

        return { success: true, message: "OTP verified successfully" };
    } catch (error) {
        console.error("otpVerification error:", error); // Improved error logging
        return { success: false, message: "Server error, please try again later" };
    }

}

export async function ContinueSignup(main_name, main_email, password, confirm_password) {

    const name = main_name.trim()
    const email = main_email.trim()

    if(!name || !email || !password || !confirm_password){
        return {success: false, message: "Empty fields, please fill in the blank spaces"}
    }

    if(confirm_password !== password){
        return {success: false, message: "Your password do not match"}
    }

    try {

        const checkEmail = "SELECT * FROM trading_journal_users"
        const query_email = await query(checkEmail)
        const no_email = checkEmail.rows[0]        

        console.log(no_email)

        return {success: false, message: "essds"}
        
    } catch (error) {
        console.log(error)
        return {success: false, message: "Server error, please try again later"}
    }
}

async function sendVerificationEmail(email, pin) {
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from: `Paul from Small Pips ${process.env.EMAIL_USER}`,
        to: email,
        subject: "One-Time Email Verification From Small Pips",
        html: `        
            <h1 style="text-align: center;">Email Verification from Small Pips</h1>
            <p style="padding: 10px;">Enter the code below to verify your email address and continue with your registration. You can ignore the email if you didn't request the OTP</p>
            <h2 style="font-weight: 800; text-align: center; margin: 20px 0px;">${pin}</h2>           
            <p style="padding: 10px; color: red;">This OTP is valid for 15 minutes. Please don't share this code with anyone</p>
            
            <div style="padding: 10px;">
                <b>Need Help?</b> <br/>
                <a href="mailto:${process.env.SITE_URL}">mail@smallpips.com</a>
            </div>`
    }

    try {

        await transport.sendMail(mailOptions)
        return { success: true }

    } catch (error) {
        return { success: false }
    }
}