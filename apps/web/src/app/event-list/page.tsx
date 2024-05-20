'use client';
import EventCard from '@/components/EventCard';
import { Footer } from '@/components/Footer';
import useGetEvents from '@/hooks/api/event/useGetEvents';
// import useGetCities from '@/hooks/api/event/useGetEventCities';
import Pagination from '@/components/pagination';
import { appConfig } from '@/utils/config';
import { useEffect, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter } from 'next/navigation';
import CategoryPicker from '@/components/CategoryPicker';
// import useGetFilterEvents from '@/hooks/api/event/useGetFilterEvents';
// import { CategoryPicker } from '@/components/FilterCategory';


const Page = () => {
  const [page, setPage] = useState<number>(1);
//   const [location, setLocation] = useState<string>('all');
//   const [category, setCategory] = useState<string>('all');
const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { data: events, meta } = useGetEvents({
    page,
    take: 6,
  });
  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };


  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 p-4">
          <div className="mb-6">
            <h2 className="font-semibold text-lg">Filter by Category</h2>
            {/* Add category filters here */}

           <CategoryPicker/>
         
            
          </div>
        </div>

        {/* Event Cards */}
        <div className="flex-1 p-5  ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((event, index) => (
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
            ))}
          </div>
          <div className="w-full flex justify-center">
            <Pagination
              total={meta?.total || 0}
              take={meta?.take || 0}
              onChangePage={handleChangePaginate}
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Page;
