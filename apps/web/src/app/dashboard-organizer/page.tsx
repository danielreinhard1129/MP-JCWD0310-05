'use client'
import EventCard from '@/components/EventCard'
import AuthGuard from '@/hoc/AuthGuard'
import useGetEvents from '@/hooks/api/event/useGetEvents'
import useGetUser from '@/hooks/api/user/useGetUser'
import { useAppSelector } from '@/redux/hooks'
import { appConfig } from '@/utils/config'
import { CircleUser, SquarePen, TicketPercent } from 'lucide-react'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

const DashboardOrganizer = () => {

  const { id } = useAppSelector((state) => state.user);
  const { user } = useGetUser(Number(id));

  if (!id) {
    return notFound();
  }

  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page,
    take: 4,
  });

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
              <p>Email : <span className="font-semibold">{user?.email}</span></p>
              <p>Role : <span className="font-semibold">{user?.role}</span></p>

              <p className="text-mythemes-blue font-semibold cursor-pointer hover:text-mythemes-purple">Show Your List Event  </p>
            </div>
            <div className="absolute top-2 right-2">
              <SquarePen className="cursor-pointer text-mythemes-scarletgum hover:text-mythemes-purple" />
            </div>
          </div>
          <h1 className="font-bold text-base text-mythemes-scarletgum">Selected Event</h1>

          <div className='h-72 border-mythemes-darkpink/50 border-2 rounded-sm flex bg-white shadow-md'>

          </div>

        </div>
        <div className="col-span-5 min-h-screen p-5">
          <div className="flex flex-col gap-4 mx-auto justify-center">
            <h1 className="font-bold text-xl">Your Events</h1>
            <div className="flex gap-4 justify-between">
              {events.map((event, index) => {
                return (
                  <EventCard
                    key={index}
                    title={event.title}
                    author={event.user.username}
                    category={event.category}
                    startDate={event.startDate}
                    price={event.price}
                    description={event.description}
                    imageURL={appConfig.baseURL + `/assets${event.thumbnail}`}
                    eventId={event.id}
                  />
                );
              })}
            </div>
            <div className='w-full h-0.5 bg-white'></div>
            <h1 className="font-bold text-xl">Transactions</h1>
            <div>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
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
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
            <h1 className="font-bold text-xl">Registrants</h1>
            <div className="w-full h-40 bg-slate-400 text-center rounded-md">
              Table Registrants
            </div>
            <h1 className="font-bold text-xl">Analysis</h1>
            <div className="w-full h-40 bg-slate-400 text-center rounded-md">
              Table Analysis
            </div>

          </div>

        </div>
      </section>
    </main >

  )
}

export default AuthGuard(DashboardOrganizer)