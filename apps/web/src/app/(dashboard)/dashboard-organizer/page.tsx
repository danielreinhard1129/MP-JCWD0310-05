'use client'
import EventCardDashboard from '@/components/EventCardDashboard'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AuthGuard from '@/hoc/AuthGuard'
import useGetEvents from '@/hooks/api/event/useGetEvents'
import useGetTransaction from '@/hooks/api/transaction/useGetTransaction'
import useTransactionApproval from '@/hooks/api/transaction/useAcceptTransaction'
import useGetUser from '@/hooks/api/user/useGetUser'
import { useAppSelector } from '@/redux/hooks'
import { appConfig } from '@/utils/config'
import { CircleCheck, CircleUser, CircleXIcon, SquarePen } from 'lucide-react'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import useAcceptTransaction from '@/hooks/api/transaction/useAcceptTransaction'
import useRejectTransaction from '@/hooks/api/transaction/useRejectTransaction'


const DashboardOrganizer = () => {

  const { id } = useAppSelector((state) => state.user);
  const { user } = useGetUser(Number(id));
  const { transaction } = useGetTransaction(Number(id));

  const valueid = Number(transaction?.id)
  const values = { id: valueid }

  const { accepting } = useAcceptTransaction()
  const { rejecting } = useRejectTransaction()


  if (!id) {
    return notFound();
  }

  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page,
    take: 4,
  });

  return (
    <div className="flex flex-col gap-4 mx-auto justify-center">
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
  )
}

export default AuthGuard(DashboardOrganizer)