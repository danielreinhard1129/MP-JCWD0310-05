import { User } from "@prisma/client";


export interface Review {
    id: number;
    userId: number;
    eventId: number;
    rating: number;
    comment: string;
    createdAt: string;

    user: User;
    event: Event;
}

export interface IFormCreateReview {
    rating: number;
    comment: string;
    createdAt: string;
    userId?: number;
    eventId?: number;
}