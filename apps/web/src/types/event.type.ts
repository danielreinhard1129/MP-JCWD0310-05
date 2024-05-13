import { User } from './user.type';

export interface Event {
  id: number;
  title: string;
  category: string;
  content: string;
  description: string;
  thumbnail: string;
  startDate: Date;
  city: string;
  venue: string;
  endDate: Date;
  price: number;
  userId: number;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date | null;

  user: User;
}


