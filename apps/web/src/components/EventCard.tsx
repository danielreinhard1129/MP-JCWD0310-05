import Link from 'next/link';
import { FC } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { format } from 'date-fns';

interface EventCardProps {
  title: string;
  description: string;
  category: string;
  author: string;
  price: number;
  imageURL: string;
  startDate: Date;
  //endDate: Date;
  //createdAt: Date;
  eventId: number;
}

const EventCard: FC<EventCardProps> = ({
  title,
  author,
  category,
  startDate,
  price,
  description,
  imageURL,
  eventId,
}) => {
    const formattedPrice = (price: number): string => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(price);
      };
  return (
    <Link href={`/${eventId}`}>
      <Card className='flex flex-col min-w-[220px]'>
        <CardHeader>
          <div className="relative h-[100px] w-full overflow-hidden rounded-md">
            <Image
              src={imageURL}
              alt="thumbnail"
              className="object-cove"
              fill
            />
          </div>
        </CardHeader>
        <CardContent className=' pt-4 flex flex-col gap-1'>
          <Badge variant="outline" className="rounded-sm bg-green-100 w-fit">
            {category}
          </Badge>
          <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
          <p className="text-sm font-light italic">
            {format(startDate, 'dd MMMM yyyy')} 
             
          </p>
          <p className="line-clamp-3">{description}</p>
          <p className="line-clamp-3">{author}</p>
          <h3>{formattedPrice(price)}</h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
