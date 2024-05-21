'use client';
import useGetUser from '@/hooks/api/user/useGetUser';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logoutAction } from '@/redux/slices/userSlice';
import { BookImage, CircleUser, Home, LogOut, Menu, SquarePen } from 'lucide-react';
import Link from 'next/link';
import Autocomplete from './AutoComplets';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet';

const NavbarAuth = () => {
    const dispatch = useAppDispatch();
    const { id } = useAppSelector((state) => state.user);

    const { user } = useGetUser(Number(id));

    // if (id) {
    //   const { user } = useGetUser(Number(id));
    //   console.log(user?.role);

    // }

    const logout = () => {
        localStorage.removeItem('token');
        dispatch(logoutAction());
    };

    // const isExplorePage = pathname === '/explore';
    return (
        <nav className="sticky top-0 z-40 flex items-center h-[10vh] bg-mythemes-scarletgum">
            <div className="w-full">
                <div className="flex justify-start items-center px-10 py-2 text-white">
                    {Boolean(id) ? (
                        <div>
                            {user?.role == 'customer' ?(
                                <Link href="/">
                                <h1 className="font-bold text-xl cursor-pointer">Eventura</h1>
                            </Link>
                            ):(
                                <Link href="/">
                                <h1 className="font-bold text-xl cursor-pointer">Eventura</h1>
                            </Link>
                            )}
                        </div>
                        
                    ) : (
                        <Link href="/">
                            <h1 className="font-bold text-xl cursor-pointer">Eventura</h1>
                        </Link>

                    )}

                </div>
            </div>

        </nav>
    );
};

export default NavbarAuth;