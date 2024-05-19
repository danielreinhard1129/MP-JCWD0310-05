
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
  createdAt: Date;
  updateAt: Date;
}

export interface IFormCreateTransaction {
    quantity: number;
    userId: number;
    eventId: number;
}

import { Event } from "./event.type";
import { User } from "./user.type";

export interface Transaction {
    id: number;
    quantity: number;
    totalPrice: number;
    expiresAt: Date;
    userId: number;
    eventId: number;
    status: string;
    user: User
    event: Event
  }

