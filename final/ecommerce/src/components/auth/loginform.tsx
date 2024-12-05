import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
// import { Alert, AlertDescription } from '@/components/ui/alert'

// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email tidak valid')
    .required('Email harus diisi'),
  password: Yup.string()
    .min(6, 'Password minimal 6 karakter')
    .required('Password harus diisi'),
})

interface LoginValues {
  email: string
  password: string
}

export default function LoginForm() {
  const initialValues: LoginValues = {
    email: '',
    password: '',
  }

  const handleSubmit = async (
    values: LoginValues,
    { setSubmitting, setStatus }: any
  ) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Login gagal')
      }

      // Handle successful login here
      console.log('Login berhasil:', data)
      
    } catch (error: any) {
      setStatus(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">Login</h2>
      </CardHeader>
      <CardContent>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, status, isSubmitting }) => (
            <Form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm">{errors.email}</div>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="password">Password</label>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm">{errors.password}</div>
                )}
              </div>

              {/* {status && (
                <Alert variant="destructive">
                  <AlertDescription>{status}</AlertDescription>
                </Alert>
              )} */}

              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Loading...' : 'Login'}
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}