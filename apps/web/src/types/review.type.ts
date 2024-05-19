import { Event } from "./event.type";
import { User } from "./user.type";

export interface Review {
    id: number;
    userId: number;
    eventId: number;
    // rating: number;
    comment: string;
    createdAt: Date;

    user: User;
    event: Event;
}

export interface IFormCreateReview {
    // rating: number;
    comment: string;
    createdAt: String;
    userId?: number;
    eventId?: number;
}