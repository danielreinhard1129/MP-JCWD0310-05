'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { AuthCard, AuthCardContent, AuthCardHeader, AuthCardTitle, Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useLogin from '@/hooks/api/auth/useLogin';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { validationSchema } from './validationSchema';

const Login = () => {
  const { login } = useLogin();
  const router = useRouter();
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        role: '',
        referral: '',
      },
      validationSchema,
      onSubmit: (values) => {
        login(values);
      },
    });
  return (
    <main className="absolute top-0 left-0 min-w-full flex min-h-screen pt-14 px-4 bg-mythemes-whitesmoke">
        <AuthCard>
          <AuthCardHeader>
            <AuthCardTitle>
              Eventura
            </AuthCardTitle>
          </AuthCardHeader>
          <AuthCardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <FormInput
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Email"
                  value={values.email}
                  error={errors.email}
                  isError={!!touched.email && !!errors.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  value={values.password}
                  error={errors.password}
                  isError={!!touched.password && !!errors.password}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <p
                  className="cursor-pointer text-end text-sm font-semibold text-mythemes-scarletgum hover:text-mythemes-purple"
                  onClick={() => router.push('/forgot-password')}
                >
                  Forgot Password?
                </p>

              </div>
              <Button className="mt-6 w-full bg-mythemes-scarletgum" type="submit">
                SIGN IN
              </Button>
              <div className='flex justify-center gap-1 py-4'>
                <p
                  className="text-center text-sm"
                >
                  Don't have an account?
                </p>
                <p
                  className="cursor-pointer text-mythemes-scarletgum font-semibold text-sm hover:text-mythemes-purple"
                  onClick={() => router.push('/register')}>
                  Sign up
                </p>
              </div>
            </form>
          </AuthCardContent>
        </AuthCard>
      
    </main>
  );
};

export default Login;