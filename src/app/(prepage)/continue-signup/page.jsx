import { VerifyEmailForm } from "@/components/root/verfy-email-form"

export const metadata = {
    title: "Continue Sign Up - Small Pips",
    description: "Continue your sign up process for Small Pips.",
}

export default function ContinueSignUp() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-4">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <VerifyEmailForm />
            </div>
        </div>
    )
}