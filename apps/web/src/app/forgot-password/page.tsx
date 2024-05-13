'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { validationSchema } from './validationSchema';
import useForgotPassword from '@/hooks/api/auth/useForgotPassword';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
  const { forgotPassword, isLoading } = useForgotPassword();
  const router = useRouter();
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema,
      onSubmit: ({ email }) => {
        forgotPassword(email);
      },
    });
  return (
    <main className="absolute top-0 left-0 min-w-full flex min-h-screen pt-14 px-4 bg-mythemes-whitesmoke">
      <div className="justify-center m-auto">
        <Card className="min-w-[400px] max-w-[500px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              LOGO
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
                  error={values.email}
                  isError={!!touched.email && !!errors.email}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              </div>
              <Button className="mt-6 w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Forgot Password
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

export default ForgotPassword;