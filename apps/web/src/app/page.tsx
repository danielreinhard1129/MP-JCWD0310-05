'use client';
import { Footer } from '@/components/Footer';
// import {Category} from "@/components/Category"
import EventCard from '@/components/EventCard';
import useGetEvents from '@/hooks/api/event/useGetEvents';
import { appConfig } from '@/utils/config';
import { useState } from 'react';
import Category from './components/Category/page';
import City from './components/City/page';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Image from 'next/image';

// import { User } from '@/types/user.type';
const Home = () => {
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page,
    take: 6,
  });
  return (
    <main className="h-screen flex flex-col">
      {/* JUMBOTRON */}
      <div className="md:container">
        <div className="relative h-56 md:h-96 mb-4 md:rounded-lg md:my-4 flex flex-col text-center justify-center">
          <Image
            src="/jumbo.avif"
            alt="Hero Pictures"
            fill
            className="object-cover md:rounded-lg"
            loading="lazy"
          />
        </div>
      </div>

      {/* FILTER BY */}
      <Category />
      <City />

      {/* CARDS */}

      <div className=" flex justify-center">
        <Carousel
          opts={{
            align: 'start',
            // loop: true,
          }}
          className="w-full p-20  container hidden md:block"
        >
          <CarouselContent className="px-10 py-2">
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
                  // endDate={event.endDate}
                  eventId={event.id}
                />
              );
            })}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className='flex flex-col md:hidden gap-5 mb-6'>
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
                  // endDate={event.endDate}
                  eventId={event.id}
                />
              );
            })}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
