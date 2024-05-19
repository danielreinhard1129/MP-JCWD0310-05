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
