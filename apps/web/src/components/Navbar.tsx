'use client';
import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logoutAction } from '@/redux/slices/userSlice';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
const Navbar = () => {

  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = useAppSelector((state) => state.user);

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
  };
  const pathname = usePathname();

  console.log(id);

  // const isExplorePage = pathname === '/explore';
  return (
    <nav className="relative z-40 bg-[#d60b52]">
      <div className="sticky top-0 z-50 container mx-auto ">
        <div className="flex items-center justify-between py-2 text-white">
          <Link href="/">
            <h1 className="font-bold text-xl cursor-pointer">Eventura</h1>
          </Link>

          <div className="w-1/2 hidden md:block">
            <Input
              placeholder="Type a command or search..."
              className="border-none text-black"
            />
          </div>

          {Boolean(id) ? (
            <div className="flex items-center justify-end gap-5">
              <Link href="/login" onClick={logout}>
                <h3 className="cursor-pointer" >Logout</h3>
              </Link>
              <Link href="/create-event" className='hidden md:block'>
                <h3 className="cursor-pointer">Create</h3>
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-end gap-5">
              <Link href="/login">
                <h3 className="cursor-pointer">Login</h3>
              </Link>
              <Link href="/register">
                <h3 className="cursor-pointer">Register</h3>
              </Link>
              <Link href="/create-event" className='hidden md:block'>
                <h3 className="cursor-pointer">Create</h3>
              </Link>

              {/* <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <GiHamburgerMenu />
                  </SheetTrigger>
  
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Register your account</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when you're
                        done.
                      </SheetDescription>
                      <div className="flex gap-3 justify-center p-2">
                        <Button className="bg-[#0e71b8]">Login</Button>
                        <Button className="bg-[#0e71b8]">Register</Button>
                      </div>
                    </SheetHeader>
                    <Separator />
                    <div className='my-4'>
                      <ul className='flex flex-col gap-3'>
                        <li className='flex gap-5 items-center'>
                          <Home/>
                          <p className='text-lg hover:text-[#d60b52]'>Home</p>
                        </li>
                        <li className='flex gap-5 items-center'>
                          <SquarePen/>
                          <Link href="/create-event">
                          <p className='text-lg hover:text-[#d60b52]'>Create Event</p>
                          </Link>
                        </li>
                        <li className='flex gap-5 items-center'>
                          <LogOut/>
                          <p className='text-lg text-[#d60b52]'>Logout</p>
                        </li>
                      </ul>
                    </div>
                  </SheetContent>
                </Sheet>
              </div> */}
            </div>
          )}
        </div>


        {/* <div className="mt-2 md:hidden">
          <Command>
            <CommandInput
              placeholder="Type a command or search..."
              className="border-none"
            />
          </Command>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
