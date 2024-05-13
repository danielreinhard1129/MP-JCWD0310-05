'use client';
import useGetEvent from '@/hooks/api/event/useGetEvent';
import { Event } from '@/types/event.type';
import EventCard from './components/EventCard';


const Page = ({ params }: { params: { id: string } }) => {
  const { event } = useGetEvent(Number(params.id));

  if(!event) {
    return <p>event not found</p>;
  }

  return (
    <div className="container">
    <h1>Upcoming Events</h1>
    <div className="events-container">
    </div>
  </div>
  );
};

export default Page;
