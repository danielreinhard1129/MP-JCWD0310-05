'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AuthGuardOrganizer from "@/hoc/AuthGuardOrganizer"
import { useAppSelector } from '@/redux/hooks'
import { notFound } from 'next/navigation'
import ChartEvents from "./components/ChartEvents"
import ChartTransactions from "./components/ChartTransactions"


const DashboardOrganizer = () => {

  const { id } = useAppSelector((state) => state.user);



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
          <div className='rounded-sm flex shadow-md'>
            <ChartEvents />
          </div>
        </TabsContent>
        <TabsContent value="transactions">
          <div className='rounded-sm flex shadow-md'>
            <ChartTransactions />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AuthGuardOrganizer(DashboardOrganizer)