'use client'

import { FC } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

interface EventCardProps {
  title: string;
  author: string;
  imageURL: string;
  startDate: Date;
  eventId: number;
  venue: string;
  city: string;
}

const EventCardDashboard: FC<EventCardProps> = ({
  title,
  author,
  startDate,
  imageURL,
  eventId,
  venue,
  city,
}) => {
  return (
    <Link href={`/${eventId}`}>
      <Card className='flex flex-col min-w-[180px] rounded-lg bg-mythemes-scarletgum/20 shadow-xl'>
        <CardHeader className="relative w-full aspect-[4/3] rounded-lg bg-slate-200">
          <Image
            src={imageURL}
            alt="thumbnail"
            className="object-cover rounded-lg"
            fill
          />
        </CardHeader>
        <CardContent className='px-4 flex flex-col text-mythemes-scarletgum gap-1 py-4'>
          <h2 className="capitalize line-clamp-1 text-sm font-bold">{title}</h2>
          <p className="line-clamp-1 text-xs font-light italic">
            {format(startDate, 'dd MMMM yyyy')} | {format(startDate, 'h:mm a')}
          </p>
          <p className="capitalize line-clamp-1 text-xs">{venue}</p>
          <p className="capitalize line-clamp-1 text-xs font-semibold">{city}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default EventCardDashboard