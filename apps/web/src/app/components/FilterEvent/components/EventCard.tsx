// components/EventCard.tsx

import React from 'react';
import { Event } from '@/types/event.type';

type EventCardProps = {
  event: Event;
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>Category: {event.category}</p>
      <img src={event.thumbnail} alt="Thumbnail" />
      {/* Add other event details here */}
    </div>
  );
};

export default EventCard;
