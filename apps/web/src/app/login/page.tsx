'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { validationSchema } from './validationSchema';
import useLogin from '@/hooks/api/auth/useLogin';
import { useRouter } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';

const Login = () => {
  const { login } = useLogin();
  const router = useRouter();
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema,
      onSubmit: (values) => {
        login(values);
      },
    });
  return (
    <main className="container mx-auto h-[90vh] px-4">
      <div className="mt-40 flex justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
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
                <div className='flex justify-between '>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember Me
                    </label>
                  </div>
                  <p
                    className="cursor-pointer text-end text-xs"
                    onClick={() => router.push('/forgot-password')}
                  >
                    Forgot Password ?
                  </p>
                </div>
              </div>
              <Button className="mt-6 w-full" type="submit">
                SIGN IN
              </Button>
              <div className='flex justify-center gap-1 py-4'>
                <p
                  className="text-center text-xs"
                >
                  Don't have an account?                   
                </p>
                <p 
                className="cursor-pointer font-medium text-purple-700 text-xs"
                    onClick={() => router.push('/register')}>
                      Sign up
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Login;