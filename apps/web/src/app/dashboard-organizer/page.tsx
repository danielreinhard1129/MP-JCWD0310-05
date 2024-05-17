'use client'
import EventCard from '@/components/EventCard'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import AuthGuard from '@/hoc/AuthGuard'
import useGetEvents from '@/hooks/api/event/useGetEvents'
import useGetUser from '@/hooks/api/user/useGetUser'
import { useAppSelector } from '@/redux/hooks'
import { appConfig } from '@/utils/config'
import { CircleUser, SquarePen } from 'lucide-react'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EventCardDashboard from '@/components/EventCardDashboard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ScrollArea } from '@/components/ui/scroll-area'


const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
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
        <div className="hidden col-span-2 min-w-full h-screen bg-mythemes-whitesmoke sticky top-0 md:flex flex-col gap-4 pt-5 px-5">
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
        <div className="md:col-span-5 col-span-7 min-h-screen p-5">
          <div className="flex flex-col gap-4 mx-auto justify-center">
            <h1 className="font-bold text-xl">Your Events</h1>
              {/* <Carousel className="flex gap-4 justify-between"> */}
              <Carousel>
                  <CarouselContent className="-ml-2">
                    {events.map((event, index) => (
                      <CarouselItem key={index} className="pl-2 md:basis-1/3 lg:basis-1/3">
                        <EventCardDashboard
                          key={index}
                          title={event.title}
                          author={event.user.username}
                          city={event.city}
                          venue={event.venue}
                          startDate={event.startDate}
                          imageURL={appConfig.baseURL + `/assets${event.thumbnail}`}
                          eventId={event.id}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
              </Carousel>

              {/* {events.map((event, index) => {
                return (
                  <EventCardDashboard
                    key={index}
                    title={event.title}
                    author={event.user.username}
                    city={event.city}
                    venue={event.venue}
                    startDate={event.startDate}
                    imageURL={appConfig.baseURL + `/assets${event.thumbnail}`}
                    eventId={event.id}
                  />
                );
              })} */}
            
            <div className='w-full h-0.5 bg-white'></div>
            <h1 className="font-bold text-xl">Transactions</h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">No</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>File</TableHead>
                  <TableHead>Approval</TableHead>
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
            <h1 className="font-bold text-xl">Registrants</h1>
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
            <h1 className="font-bold text-xl">Analysis</h1>
            <Tabs defaultValue="daily" className="w-full">
              <TabsList>
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
              <TabsContent value="daily">
                <div className='h-72 border-mythemes-darkpink/50 border-2 rounded-sm flex bg-white shadow-md'>
                  Shows the data in reports visualization with range per day
                </div>
              </TabsContent>
              <TabsContent value="monthly">
                <div className='h-72 border-mythemes-darkpink/50 border-2 rounded-sm flex bg-white shadow-md'>
                  Shows the data in reports visualization with range per month
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div className='h-72 border-mythemes-darkpink/50 border-2 rounded-sm flex bg-white shadow-md'>
                  Shows the data in reports visualization with range per year
                </div>
              </TabsContent>
            </Tabs>
          </div>

        </div>
      </section>
    </main >

  )
}

export default AuthGuard(DashboardOrganizer)