'use client';
import { Input } from '@/components/ui/input';
import useGetUser from '@/hooks/api/user/useGetUser';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logoutAction } from '@/redux/slices/userSlice';
import Link from 'next/link';
import Autocomplete from './AutoComplets';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Home, LogOut, Menu, SquarePen } from 'lucide-react';

const Navbar = () => {
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
        <div className="flex justify-between items-center px-10 py-2 text-white">
          <Link href="/">
            <h1 className="font-bold text-xl cursor-pointer">Eventura</h1>
          </Link>

          <div className="w-1/2 hidden md:block">
            <Autocomplete />
          </div>

          {Boolean(id) ? (
            <div className="flex items-center justify-end gap-5">
              <Link href="/event-list" className="hidden md:block">
                <h3 className="cursor-pointer">Discover</h3>
              </Link>
              <Link href="/login" onClick={logout} className="hidden md:block">
                <h3 className="cursor-pointer">Logout</h3>
              </Link>
              {user?.role == 'customer' ? (
                <Link href="/dashboard-customer" className="hidden md:block">
                  <h3 className="cursor-pointer">Profile</h3>
                </Link>
              ) : (
                <div className="flex items-center gap-5">
                  <Link href="/dashboard-organizer" className='hidden md:block'>
                    <h3 className="cursor-pointer">Profile</h3>
                  </Link>
                  <Link href="/create-event" className='hidden md:block'>
                    <h3 className="cursor-pointer">Create</h3>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-end gap-5">
              <Link href="/event-list" className="hidden md:block">
                <h3 className="cursor-pointer">Discover</h3>
              </Link>
              <Link href="/login" className="hidden md:block">
                <h3 className="cursor-pointer">Login</h3>
              </Link>
              <Link href="/register" className="hidden md:block">
                <h3 className="cursor-pointer">Register</h3>
              </Link>
              <Link href="/create-event" className="hidden md:block">
                <h3 className="cursor-pointer">Create</h3>
              </Link>

              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Menu />
                  </SheetTrigger>

                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Register your account</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </SheetDescription>

                      <div className="flex gap-3 justify-center p-2">
                        <Link href="/login">
                        <Button className="bg-[#0e71b8]">Login</Button>
                        </Link>
                        <Link href="/register">
                        <Button className="bg-[#0e71b8]">Register</Button>
                        </Link>
                        
                        
                      </div>
                    </SheetHeader>
                    <Separator />
                    <div className="my-4">
                      <ul className="flex flex-col gap-3">
                        <li className="flex gap-5 items-center">
                          <Home />
                          <Link href="/">
                          <p className="text-lg hover:text-[#d60b52]">Home</p>
                          </Link>
                        </li>
                        <li className="flex gap-5 items-center">
                          <SquarePen />
                          <Link href="/create-event">
                            <p className="text-lg hover:text-[#d60b52]">
                              Create Event
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
