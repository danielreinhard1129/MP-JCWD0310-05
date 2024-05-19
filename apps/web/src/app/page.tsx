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
    take: 4,
  });
  return (
    <main className="h-screen flex flex-col">
      {/* JUMBOTRON */}
      <div className="md:container">
        <div className="relative h-36 md:h-96 rounded-lg my-4 flex flex-col text-center justify-center">
          <Image src="/jumbo.avif" alt="Hero Pictures" fill className="object-cover rounded-lg" loading="lazy" />
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
          className="w-full p-20  container"
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

      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 my-10 container">
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
      </div>
      <Footer />
    </main>
  );
};

export default Home;
