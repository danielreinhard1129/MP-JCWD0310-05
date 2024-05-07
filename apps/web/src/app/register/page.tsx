'use client';

import FormInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import useRegister from '@/hooks/api/auth/useRegister';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';

const Register = () => {
    const { register } = useRegister();
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            role: '',
        },
        validationSchema,
        onSubmit: (values) => {
            register(values);
        },
    });

    return (
        <main className="container mx-auto h-[90vh] px-4">
            <div className="mt-40 flex justify-center">
                <Card>
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
                                    placeholder="Password"
                                    value={formik.values.password}
                                    error={formik.errors.password}
                                    isError={!!formik.touched.password && !!formik.errors.password}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                />
                                <FormInput
                                    name="role"
                                    type="text"
                                    label="Role"
                                    placeholder="Choose your role"
                                    value={formik.values.role}
                                    error={formik.errors.role}
                                    isError={!!formik.touched.role && !!formik.errors.role}
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                />
                                <Label htmlFor="role" >Role </Label>
                                <Select
                                    name="role"
                                    defaultValue="customer"
                                    onValueChange={formik.handleChange}
                                >
                                    <SelectTrigger className="w-full border">
                                        <SelectValue placeholder="Choose your role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="customer">Customer</SelectItem>
                                            <SelectItem value="organizer">Organizer</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button className="mt-6 w-full" type="submit">
                                Register
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main >
    );
};

export default Register;