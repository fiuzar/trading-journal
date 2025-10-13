"use server"

import { auth } from "@/auth"

export async function add_trade_account(account_name, starting_balance, leverage, currency, rules, strategy){
    // if(!account_name || !starting_balance || !currency || !rules.max_risk_per_trade || !rules.max_daily_loss || !rules.max_total_loss) {
    //     return {success: false, message: "Empty fields, all the field marked * are compulsory"}
    // }

    const session = await auth()

    return {}
}

export async function delete_trade_account() {
    
}