import { RegisterForm } from "@/components/root/register-form"

export const metadata = {
    title: 'Register - Pip',
    description: 'Register your Account on Small Pips.',
}

export default function LoginPage() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-4">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <RegisterForm />
            </div>
        </div>
    )
}