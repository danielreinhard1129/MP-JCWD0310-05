import { ArrowLeftRight, CircleUser, FileBarChart, Home, HomeIcon, LayoutDashboard, SquarePen, Theater, Ticket } from 'lucide-react';

import Link from "next/link";

interface NavigationBarProps {
    href: string;
    children: React.ReactNode;
}

export const NavigationBar = ({ href, children }: NavigationBarProps) => {
    return (
        <Link href={href}>
            <p className="flex cursor-pointer items-center text-xl gap-x-2 py-2 font-bold text-mythemes-scarletgum transition duration-300 hover:text-mythemes-scarletgum/70">
                {children}
            </p>
        </Link>
    );
};

const Sidebar = () => {
    return (
        <>
            <section className=" flex w-full flex-col justify-between px-4 pb-4 max-md:hidden">
                <div className='h-[100px] aspect-square'>
                    <HomeIcon className='h-full w-full p-2 text-mythemes-scarletgum' />
                </div>
                <div className="m-4 flex flex-col gap-y-4 px-4">
                    <NavigationBar href={"/dashboard-organizer"}>
                        <LayoutDashboard />
                        Dashboard
                    </NavigationBar>
                    <NavigationBar href={"/dashboard-organizer/transactions"}>
                        <ArrowLeftRight />
                        Transactions
                    </NavigationBar>
                    <NavigationBar href={"/dashboard-organizer/event-list"}>
                        <Theater />
                        Events
                    </NavigationBar>
                </div>
            </section>
        </>
    );
};

export default Sidebar;
