'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AuthGuardOrganizer from "@/hoc/AuthGuardOrganizer"
import { useAppSelector } from '@/redux/hooks'
import { notFound } from 'next/navigation'
import ChartEvents from "./components/ChartEvents"
import ChartTransactions from "./components/ChartTransactions"
import useGetEventsByOrganizer from "@/hooks/api/event/useGetEventsByOrganizer"
import useGetTransactionsByOrganizer from "@/hooks/api/transaction/useGetTransactionsByOrganizer"
import { CircleX } from "lucide-react"


const DashboardOrganizer = () => {

  const { id } = useAppSelector((state) => state.user);
  const { data: event } = useGetEventsByOrganizer({ id: id });
  const { data: transaction } = useGetTransactionsByOrganizer({
    id: id,
    status: 'COMPLETE',
  });



  if (!id) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4 mx-auto justify-center">
      <h1 className="font-bold text-mythemes-scarletgum text-xl">Analysis</h1>
      <Tabs defaultValue="event" className="w-full">
        <TabsList className="w-full flex">
          <TabsTrigger value="event" className="w-full">Events Released</TabsTrigger>
          <TabsTrigger value="transactions" className="w-full">Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="event">
          {(event.length < 1) ? (
            <div className='w-full flex justify-center my-auto gap-2 bg-mythemes-scarletgum/20 py-10 text-xl font-semibold text-mythemes-scarletgum'>
              <div>
                <CircleX className='text-mythemes-scarletgum h-7 w-7' />
              </div>
              <h1>You Have No Event Yet!!</h1>
            </div>
          ) : (
            <div className='rounded-sm flex shadow-md'>
              <ChartEvents />
            </div>
          )}
        </TabsContent>
        <TabsContent value="transactions">
          {(transaction.length < 1) ? (
            <div className='w-full flex justify-center my-auto gap-2 bg-mythemes-scarletgum/20 py-10 text-xl font-semibold text-mythemes-scarletgum'>
              <div>
                <CircleX className='text-mythemes-scarletgum h-7 w-7' />
              </div>
              <h1>You Have No Transaction Yet!!</h1>
            </div>
          ) : (
            <div className='rounded-sm flex shadow-md'>
              <ChartTransactions />
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AuthGuardOrganizer(DashboardOrganizer)