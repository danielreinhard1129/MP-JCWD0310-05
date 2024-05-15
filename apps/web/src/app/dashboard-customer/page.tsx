'use client'

import AuthGuard from "@/hoc/AuthGuard";
import useGetUser from "@/hooks/api/user/useGetUser";
import { useAppSelector } from "@/redux/hooks";
import { CircleUser, PersonStandingIcon, SquarePen, TicketPercent } from "lucide-react";
import { notFound } from "next/navigation";


const DashboardCustomer = () => {

    const { id } = useAppSelector((state) => state.user);
    const { user } = useGetUser(Number(id));

    if (!id) {
        return notFound();
    }

    const existingCoupon = user?.coupon
    const existingPoints = user?.points

    return (
        <main className='relative'>
            <section className="grid grid-cols-7">
                <div className="col-span-2 min-w-full h-screen bg-mythemes-whitesmoke sticky top-0 flex flex-col gap-4 pt-5 px-5">
                    <h1 className="font-bold text-xl text-mythemes-scarletgum">Your Account</h1>
                    <div className='relative h-24 border-mythemes-yellow/50 border-2 rounded-sm flex bg-white shadow-sm'>
                        <div className='h-full aspect-square'>
                            <CircleUser className='h-full w-full p-2 text-mythemes-yellow' />
                        </div>
                        <div className='flex flex-col gap-1 w-full my-auto text-xs pl-1 pr-2'>
                            <p className="text-sm font-semibold">{user?.username}</p>
                            <p>Referral Code : <span className="font-semibold">{user?.referral}</span></p>
                            <p>Point Balance : <span className="font-semibold">{(existingPoints)?(existingPoints):('-')}</span></p>
                            <p className="text-mythemes-blue font-semibold cursor-pointer hover:text-mythemes-purple">Show Who Use Your Refferal</p>
                        </div>
                        <div className="absolute top-2 right-2">
                            <SquarePen className="cursor-pointer text-mythemes-scarletgum hover:text-mythemes-purple" />
                        </div>
                    </div>
                    <h1 className="font-bold text-base text-mythemes-scarletgum">Coupon and Voucher</h1>
                    {(existingCoupon) ? (
                        <div className='h-24 border-mythemes-darkpink/50 border-2 rounded-sm flex bg-white shadow-md'>
                            <div className='h-full aspect-square'>
                                <TicketPercent className='h-full w-full p-2 text-mythemes-darkpink -rotate-45' />
                            </div>
                            <div className='flex flex-col gap-1 w-full my-auto text-xs pl-1 pr-2'>
                                <p className="text-sm font-semibold">Coupon Discount</p>
                                <div className="w-full h-0.5 bg-mythemes-darkpink/50"></div>
                                <p className="text-xl font-medium">Get <span className="font-semibold text-mythemes-darkpink">10% OFF</span></p>
                            </div>
                        </div>
                    ) : (
                        <div className='h-10 rounded-sm flex items-center bg-white'>
                            <p className="text-center mx-auto">You have no any Coupon or Voucher!</p>
                        </div>
                    )}
                </div>
                <div className="col-span-5 min-h-screen p-5">
                    <div className="flex flex-col gap-4 mx-auto justify-center">
                        <h1 className="font-bold text-xl">Your Tickets</h1>
                        <div className="flex gap-4">
                            <div className='h-24 border-mythemes-blue/50 border-2 rounded-sm flex bg-white shadow-md'>
                                <div className='h-full aspect-square'>
                                    <div className="bg-slate-200 w-full h-full"></div>
                                </div>
                                <div className='flex flex-col gap-1 w-full my-auto text-xs pl-1 pr-2'>
                                    <p className="text-sm font-semibold">Coupon Discount</p>
                                    <div className="w-full h-0.5 bg-mythemes-blue/50"></div>
                                    <p className="text-xl font-medium">Get <span className="font-semibold text-mythemes-darkpink">10% OFF</span></p>
                                </div>
                            </div>
                            <div className='h-24 border-mythemes-blue/50 border-2 rounded-sm flex bg-white shadow-md'>
                                <div className='h-full aspect-square'>
                                    <div className="bg-slate-200 w-full h-full"></div>
                                </div>
                                <div className='flex flex-col gap-1 w-full my-auto text-xs pl-1 pr-2'>
                                    <p className="text-sm font-semibold">Coupon Discount</p>
                                    <div className="w-full h-0.5 bg-mythemes-blue/50"></div>
                                    <p className="text-xl font-medium">Get <span className="font-semibold text-mythemes-darkpink">10% OFF</span></p>
                                </div>
                            </div>
                            <div className='h-24 border-mythemes-blue/50 border-2 rounded-sm flex bg-white shadow-md'>
                                <div className='h-full aspect-square'>
                                    <div className="bg-slate-200 w-full h-full"></div>
                                </div>
                                <div className='flex flex-col gap-1 w-full my-auto text-xs pl-1 pr-2'>
                                    <p className="text-sm font-semibold">Coupon Discount</p>
                                    <div className="w-full h-0.5 bg-mythemes-blue/50"></div>
                                    <p className="text-xl font-medium">Get <span className="font-semibold text-mythemes-darkpink">10% OFF</span></p>
                                </div>
                            </div>
                        </div>
                        <h1 className="font-bold text-xl">Order History</h1>
                        <div className="w-full h-40 bg-slate-400 text-center rounded-md">
                            Table Order History
                        </div>

                    </div>

                </div>
            </section>
        </main>

    )
}

export default AuthGuard(DashboardCustomer)