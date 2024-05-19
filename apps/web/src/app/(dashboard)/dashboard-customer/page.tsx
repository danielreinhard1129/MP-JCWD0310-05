'use client'

import AuthGuard from "@/hoc/AuthGuard";
import useGetUser from "@/hooks/api/user/useGetUser";
import { useAppSelector } from "@/redux/hooks";
import { CircleUser, PersonStandingIcon, SquarePen, TicketPercent } from "lucide-react";
import { notFound } from "next/navigation";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { useState } from "react";
import useGetEvents from "@/hooks/api/event/useGetEvents";
import { format } from "date-fns";
import Image from "next/image";
import { appConfig } from "@/utils/config";

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
]

const DashboardCustomer = () => {

    const { id } = useAppSelector((state) => state.user);

    const { user } = useGetUser(Number(id));

    if (!id) {
        return notFound();
    }

    const existingCoupon = user?.coupon
    const existingPoints = user?.points

    const [page, setPage] = useState<number>(1);
    const { data: events, meta } = useGetEvents({
        page,
        take: 4,
    });

    return (
        <main className='relative'>
            <section className="grid grid-cols-1 md:grid-cols-7">
                <div className="md:col-span-2 min-w-full md:h-screen bg-mythemes-whitesmoke md:sticky md:top-0 flex flex-col gap-4 pt-5 px-5">
                    <h1 className="font-bold text-xl text-mythemes-scarletgum">Your Account</h1>
                    <div className='relative h-24 border-mythemes-yellow/50 border-2 rounded-sm flex bg-white shadow-sm'>
                        <div className='h-full aspect-square'>
                            <CircleUser className='h-full w-full p-2 text-mythemes-yellow' />
                        </div>
                        <div className='flex flex-col gap-1 w-full my-auto text-xs pl-1 pr-2'>
                            <p className="text-sm font-semibold">{user?.username}</p>
                            <p>Referral Code : <span className="font-semibold">{user?.referral}</span></p>
                            <p>Point Balance : <span className="font-semibold">{(existingPoints) ? (existingPoints) : ('-')}</span></p>
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
                <div className="md:col-span-5 min-h-screen p-5">
                    <div className="flex flex-col gap-4 mx-auto justify-center">
                        <h1 className="font-bold text-xl">Your Tickets</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
                            {events.map((event, index) => (
                                <div className='max-w-[350px] w-full h-24 border-mythemes-blue/50 border-2 rounded-sm flex bg-white shadow-md'>
                                    <div className='relative h-full aspect-square'>
                                        <Image
                                            src={appConfig.baseURL + `/assets${event.thumbnail}`}
                                            alt="thumbnail"
                                            className="object-cover rounded-lg"
                                            fill
                                        />
                                    </div>
                                    <div className='flex flex-col w-full my-auto text-xs pl-2 pr-2'>
                                        <p className="text-lg font-semibold">{event.title}</p>
                                        <p className="text-md">Date : <span className="font-semibold">{format(event.startDate, 'dd MMMM yyyy')}</span></p>
                                        <p className="text-md">Time : <span className="font-semibold">{format(event.startDate, 'h:mm a')}</span></p>
                                        <p className="text-sm text-mythemes-darkpink font-semibold">Ticket A (1) & Ticket B (2)</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h1 className="font-bold text-xl">Order History</h1>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Invoice</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice) => (
                                    <TableRow key={invoice.invoice}>
                                        <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                        <TableCell>{invoice.paymentStatus}</TableCell>
                                        <TableCell>{invoice.paymentMethod}</TableCell>
                                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default AuthGuard(DashboardCustomer)