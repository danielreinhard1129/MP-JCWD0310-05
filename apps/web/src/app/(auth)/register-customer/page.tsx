'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { AuthCard, AuthCardContent, AuthCardHeader, AuthCardTitle, Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import useRegister from '@/hooks/api/auth/useRegister';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { useRouter } from 'next/navigation';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

const RegisterCustomer = () => {
    const { register } = useRegister();
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            referral: '',
            role: 'customer'
        },
        validationSchema,
        onSubmit: (values) => {
            register(values);
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
                            <FormInput
                                name="referral"
                                type="text"
                                label="Referral Code"
                                placeholder="Enter referral code"
                                value={formik.values.referral}
                                error={formik.errors.referral}
                                isError={!!formik.touched.referral && !!formik.errors.referral}
                                handleChange={formik.handleChange}
                                handleBlur={formik.handleBlur}
                            />
                        </div>
                        <Button className="mt-6 w-full" type="submit">
                            SIGN UP
                        </Button>
                        <div className='flex justify-center gap-1 py-4'>
                            <p className="text-center text-sm" >
                                Already have an account?
                            </p>
                            <Link href="/login" className="cursor-pointer text-mythemes-scarletgum font-semibold text-sm hover:text-mythemes-purple">
                                Sign in
                            </Link>
                        </div>
                    </form>
                </AuthCardContent>
            </AuthCard>
        </main >
    );
};

export default RegisterCustomer;