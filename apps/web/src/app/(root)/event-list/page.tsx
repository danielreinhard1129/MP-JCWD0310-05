'use client';
import EventCard from '@/components/EventCard';
import { Footer } from '@/components/Footer';
import useGetEvents from '@/hooks/api/event/useGetEvents';

import CategoryPicker from '@/components/CategoryPicker';
import Pagination from '@/components/pagination';
import { appConfig } from '@/utils/config';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CategoryDropDown } from './components/CategoryDropDown';
import AuthGuardCustomer from '@/hoc/AuthGuardCustomer';

const Page = () => {
  const [page, setPage] = useState<number>(1);

  const { data: events, meta } = useGetEvents({
    page,
    take: 6,
  });
  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-gray-100 p-4">
          <div className="mb-6 hidden md:block">
            <h2 className="font-semibold text-lg">Filter by Category</h2>
            {/* Add category filters here */}

            <CategoryPicker />
          </div>
          <div className="md:hidden container">
            <CategoryDropDown />
          </div>
        </div>

        {/* Event Cards */}
        <div className="flex-1 p-5  mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 md:mb-0">
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

export default AuthGuardCustomer(Page);