'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useRegister from '@/hooks/api/auth/useRegister';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchame';
import { useRouter } from 'next/navigation';

const RegisterOrganizer = () => {
    const { register } = useRegister();
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            role: 'organizer'
        },
        validationSchema,
        onSubmit: (values) => {
            register(values);
        },
    });

    return (
        <main className="container mx-auto h-[90vh] px-4">
            <div className="mt-40 flex justify-center">
                <Card className="w-[450px]">
                    <CardHeader>
                        <CardTitle className="text-center text-3xl text-primary">
                            Eventura
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="grid w-full items-center gap-4">
                                <FormInput
                                    name="email"
                                    type="email"
                                    label="Email"
                                    placeholder="Your email"
                                    value={formik.values.email}
                                    error={formik.errors.email}
                                    isError={!!formik.touched.email && !!formik.errors.email}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                />
                                <FormInput
                                    name="username"
                                    type="text"
                                    label="Username"
                                    placeholder="your username"
                                    value={formik.values.username}
                                    error={formik.errors.username}
                                    isError={!!formik.touched.username && !!formik.errors.username}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                />
                                <FormInput
                                    name="password"
                                    type="password"
                                    label="Password"
                                    placeholder="Entry password"
                                    value={formik.values.password}
                                    error={formik.errors.password}
                                    isError={!!formik.touched.password && !!formik.errors.password}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                />                              
                            </div>
                            <Button className="mt-6 w-full" type="submit">
                                SIGN UP
                            </Button>
                            <div className='flex justify-center gap-1 py-4'>
                                <p
                                    className="text-center text-xs"
                                >
                                    Already have an account?  
                                </p>
                                <p
                                    className="cursor-pointer font-medium text-purple-700 text-xs"
                                    onClick={() => router.push('/login')}>
                                    Sign in
                                </p>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main >
    );
};

export default RegisterOrganizer;