'use client'
import EventCardDashboard from '@/components/EventCardDashboard';
//import Pagination from '@/components/pagination';
import AuthGuard from '@/hoc/AuthGuard';
import useGetEventsByOrganizer from '@/hooks/api/event/useGetEventsByOrganizer';
import { useAppSelector } from '@/redux/hooks';
import { appConfig } from '@/utils/config';
import { useState } from 'react';


const EventList = () => {
  const [page, setPage] = useState<number>(1);
  const { id } = useAppSelector((state) => state.user);
  const { data: events } = useGetEventsByOrganizer(id);

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <div className="flex flex-col gap-4 mx-auto justify-center">
      <h1 className="font-bold text-2xl text-mythemes-scarletgum">Your Events</h1>

      <div className='grid grid-cols-4 gap-4'>
        {events?.map((event, index) => {
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
        })}
      </div>
      {/* <Pagination
        total={meta?.total || 0}
        take={meta?.take || 0}
        onChangePage={handleChangePaginate}
      /> */}
    </div>
  )
}

export default AuthGuard(EventList)