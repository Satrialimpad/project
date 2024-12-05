import { LoginForm } from "@/components/forms/login-form"

export default function LoginPage() {
  return (
    <div className="container max-w-md mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      <LoginForm />
    </div>
  )
}