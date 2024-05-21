
'use client';

import { AuthCard, AuthCardContent, AuthCardHeader, AuthCardTitle } from '@/components/ui/card';
import AuthGuardCustomer from '@/hoc/AuthGuardCustomer';
import { useRouter } from 'next/navigation';

const Checkout = () => {
    // const { checkout } = useCheckout();
    const router = useRouter();
    // const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    //     useFormik({
    //         initialValues: {
    //             quantity: '',
    //         },
    //         validationSchema,
    //         onSubmit: (values) => {
    //             checkout(values);
    //         },
    //     });
    return (
        <main className="absolute top-0 left-0 min-w-full flex min-h-screen pt-14 px-4 bg-mythemes-whitesmoke">
            <AuthCard>
                <AuthCardHeader>
                    <AuthCardTitle>
                        Eventura
                    </AuthCardTitle>
                </AuthCardHeader>
                <AuthCardContent>
                    {/* <form onSubmit={handleSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <FormInput
                                name="quantity"
                                type="number"
                                label="Quantity"
                                placeholder="Quantity"
                                value={values.quantity}
                                error={errors.quantity}
                                isError={!!touched.quantity && !!errors.quantity}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                            />

                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Accept terms and conditions
                                </label>
                            </div>

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
                    </form> */}
                </AuthCardContent>
            </AuthCard>

        </main>
    );


}

export default AuthGuardCustomer(Checkout) 