'use client';

import { Footer } from '@/components/Footer';
import Markdown from '@/components/Markdown';
import TransactionDialog from '@/components/TransactionDialog';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import { appConfig } from '@/utils/config';
import { format } from 'date-fns';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import SkeletonEventDetail from './components/SkeletonEventDetail';

import CreateReviewDialog from './components/CreateReviewDialog';
// import CreateReviewDialog from '@/components/CreateReviewDialog';

import { Button } from '@/components/ui/button';




const EventDetail = ({ params }: { params: { id: string } }) => {
  const formattedPrice = (price: number): string => {
    return price === 0
      ? 'Free entrance'
      : new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      }).format(price);
  };
  const { isLoading, event } = useGetEvent(Number(params.id));
  // const { review } = useGetReview(Number(params.id));

  if (isLoading) {
    return (
      <div className="container mx-auto px-4">
        <SkeletonEventDetail />
      </div>
    );
  }

  if (!event) {
    return notFound();
  }


  // if (!review) {
  //   return notFound();
  // }

  const priceString = formattedPrice(event.price);

  return (
    <main className="">
      <section className="my-4 container">
        <div className="md:grid md:grid-cols-3 gap-3 flex flex-col">
          <div className="relative md:h-[400px] h-[200px] md:col-span-2">
            <Image
              fill
              src={`${appConfig.baseURL}/assets${event.thumbnail}`}
              alt="thumbnail image"
              className="object-cover bg-slate-200 rounded-md"
            />
          </div>

          <div className="md:sticky md:top-4 md:self-start">
            {/* EVENT OVERVIEW CARD */}

            <Card>


              <CardHeader>
                <CardTitle>
                  <h1 className="md:text-3xl text-2xl font-semibold">
                    {event.title}
                  </h1>
                </CardTitle>

                <div className="space-y-1.5">
                  <Badge variant="outline" className="rounded-sm bg-green-100">
                    {event.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <CalendarDays />
                  <p>{format(event.startDate, 'dd MMMM yyyy')}</p>
                </div>
                <div className="flex gap-3 my-3">
                  <Clock />
                  <p>
                    {format(event.startDate, 'HH:mm')} -{' '}
                    {format(event.endDate, 'HH:mm')} WIB
                  </p>
                </div>
                <div className="flex gap-3">
                  <MapPin />
                  <p>
                    {event.venue}, {event.city}
                  </p>
                </div>
              </CardContent>
              <Separator />
              <CardFooter>
                <p className="mt-5 cursor-pointer font-semibold">
                  {event.user.username}
                </p>
              </CardFooter>
            </Card>


            {/* BUY TICKET CARD */}
            <Card className="mt-4 pt-5">
              <CardContent className="flex justify-between items-center">
                <h2 className="">Buy ticket</h2>
                <TransactionDialog
                  price={event.price}
                  ticketLimit={event.ticketLimit}
                  formattedPrice={priceString}
                />
                <CreateReviewDialog />
              </CardContent>
            </Card>
          </div>


          <div className="mt-4 md:col-span-2">
            <Markdown content={event.content} />
          </div>

        </div>

      </section >

      <Footer />
    </main >
  );
};

export default EventDetail;
