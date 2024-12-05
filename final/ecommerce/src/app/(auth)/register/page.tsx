import { RegisterForm } from "@/components/forms/register-form" 

export default function RegisterPage() {
  return (
    <div className="container max-w-md mx-auto mt-10 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
      <RegisterForm />
    </div>
  )
}