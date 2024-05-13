import { Button } from '@/components/ui/button'
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Card } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

const Register = () => {
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
                        <Link href="/register-customer">
                            <Button className="mt-6 w-full" type="submit">
                                Sign Up as Costumer
                            </Button>
                        </Link>
                        <Link href="/register-organizer">
                            <Button className="mt-6 w-full" type="submit">
                                Sign Up as Organizer
                            </Button>
                        </Link>
                        <div className='flex justify-center gap-1 py-4'>
                            <p
                                className="text-center text-xs"
                            >
                                Already have an account?
                            </p>
                            <Link href="/login" className="cursor-pointer font-medium text-purple-700 text-xs">
                            
                                Sign in
                            
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main >
    )
}

export default Register