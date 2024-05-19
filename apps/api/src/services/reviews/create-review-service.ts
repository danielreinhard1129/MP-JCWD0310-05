import prisma from "@/prisma";
import { Review } from "@prisma/client";

interface CreateReviewBody extends Omit <Review, 'id'> {}

export const createReviewService = async (body: CreateReviewBody) => {
    try {
        const {eventId, userId, rating, comment, createdAt} = body

        const user = await prisma.review.findFirst({
            where: {id: Number(userId)}
        });

        if(!user) {
            throw new Error('user not found');
        }

        return await prisma.review.create({
            data: {
                ...body,
                userId: Number(userId),
                eventId: Number(eventId),
                rating: Number(rating),
                comment: String(comment),
                createdAt: String(createdAt),
            }
        })
    } catch (error) {
        throw error;
    }
}