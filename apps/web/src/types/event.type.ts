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
  ticketLimit: number;
  createdAt: Date;
  updateAt: Date;
  deletedAt: Date | null;
  user: User;
}

export interface IFormCreateEvent {
  title: string;
  category: string;
  content: string;
  thumbnail: File[];
  description: string;
  startDate: string;
  endDate: string;
  city: string;
  venue: string;
  price: number;
  userId?: number;
  ticketLimit: number;
}

