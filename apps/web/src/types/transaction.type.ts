
import { User } from './user.type';
import { Event } from './event.type';


export interface Transaction {
  id: number;
  quantity: number;
  totalPrice: number;
  expiresAt: Date;
  userId: number;
  user: User;
  eventId: number;
  event: Event;
  status: string;
  createdAt: Date;
  updateAt: Date;
}

export interface IFormCreateTransaction {
    quantity: number;
    userId: number;
    eventId: number;
}

