import { Button } from '@/components/ui/button'
import { AuthCard, AuthCardContent, AuthCardHeader, AuthCardTitle, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Card } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <main className="absolute top-0 left-0 min-w-full flex min-h-screen pt-14 px-4 bg-mythemes-whitesmoke">
            <AuthCard>
                <AuthCardHeader>
                    <AuthCardTitle>
                        Eventura
                    </AuthCardTitle>
                </AuthCardHeader>
                <AuthCardContent>
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
                            className="text-center text-sm"
                        >
                            Already have an account?
                        </p>
                        <Link href="/login" className="cursor-pointer text-mythemes-scarletgum font-semibold text-sm hover:text-mythemes-purple">

                            Sign in

                        </Link>
                    </div>
                </AuthCardContent>
            </AuthCard>
        </main >
    )
}

export default Register