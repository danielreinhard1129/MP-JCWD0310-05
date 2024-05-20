'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import AuthGuardCustomer from "@/hoc/AuthGuardCustomer";
import useGetTransaction from "@/hooks/api/transaction/useGetTransactions";
import useGetUser from "@/hooks/api/user/useGetUser";
import { useAppSelector } from "@/redux/hooks";
import { appConfig } from "@/utils/config";
import { format } from "date-fns";
import { CircleUser, TicketPercent } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

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

    const { data: transactions } = useGetTransaction({
        id: id,
        status: "APPROVED" 
      });
    const { data: transactionsHistory } = useGetTransaction({
        id: id,
      });


    if (!id) {
        return notFound();
    }

    const existingCoupon = user?.coupon
    const existingPoints = user?.points


    return (
        <main className='relative'>
            <section className="grid grid-cols-1 md:grid-cols-7">
                <div className="md:col-span-2 min-w-full md:h-screen bg-mythemes-whitesmoke md:sticky md:top-0 flex flex-col gap-4 pt-5 px-5">
                    <h1 className="font-bold text-xl text-mythemes-scarletgum">Your Account</h1>
                    <div className='relative h-24 bg-mythemes-yellow/20 rounded-sm flex shadow-sm'>
                        <div className='h-full aspect-square'>
                            <CircleUser className='h-full w-full p-2 text-mythemes-yellow' />
                        </div>
                        <div className='flex flex-col gap-1 w-full my-auto text-xs pl-1 pr-2'>
                            <p className="uppercase text-lg font-semibold">{user?.username}</p>
                            <p className="text-sm">Referral Code : <span className="font-semibold">{user?.referral}</span></p>
                            <p className="text-sm">Point Balance : <span className="font-semibold">{(existingPoints) ? (existingPoints) : ('-')}</span></p>
                            {/* <p className="text-mythemes-blue font-semibold cursor-pointer hover:text-mythemes-purple">Show Who Use Your Refferal</p> */}
                        </div>
                        {/* <div className="absolute top-2 right-2">
                            <SquarePen className="cursor-pointer text-mythemes-scarletgum hover:text-mythemes-purple" />
                        </div> */}
                    </div>
                    <h1 className="font-bold text-base text-mythemes-scarletgum">Coupon and Voucher</h1>
                    {(existingCoupon) ? (
                        <div className='h-24 bg-mythemes-darkpink/20 rounded-sm flex shadow-md'>
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
                        <h1 className="font-bold text-xl text-mythemes-scarletgum">Your Tickets</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between">
                            {transactions.map((transaction, index) => (
                                <div key={index} className='max-w-[350px] w-full h-24 bg-mythemes-scarletgum/20 rounded-lg flex shadow-md'>
                                    <div className='relative h-full aspect-square'>
                                        <Image
                                            src={appConfig.baseURL + `/assets${transaction?.event?.thumbnail}`}
                                            alt="thumbnail"
                                            className="object-cover rounded-sm"
                                            fill
                                        />
                                    </div>
                                    <div className='flex flex-col w-full my-auto text-xs pl-2 pr-2'>
                                        <p className="text-lg text-mythemes-scarletgum font-semibold">{transaction?.event?.title}</p>
                                        <p className="text-md text-mythemes-scarletgum">Date : <span className="font-semibold">{format(transaction?.event?.startDate, 'dd MMMM yyyy')}</span></p>
                                        <p className="text-md text-mythemes-scarletgum">Time : <span className="font-semibold">{format(transaction?.event?.startDate, 'h:mm a')}</span></p>
                                        <p className="text-sm text-mythemes-darkpink font-semibold">Ticket - {transaction?.quantity}</p>
                            
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h1 className="font-bold text-xl text-mythemes-scarletgum">Order History</h1>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Event</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                            {transactionsHistory.map((transactionHistory, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{transactionHistory?.event?.title}</TableCell>
                                        <TableCell>{transactionHistory?.quantity}</TableCell>
                                        <TableCell>{transactionHistory?.totalPrice}</TableCell>
                                        <TableCell>{transactionHistory?.status}</TableCell>
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

export default AuthGuardCustomer(DashboardCustomer)