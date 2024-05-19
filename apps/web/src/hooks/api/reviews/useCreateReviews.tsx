import { axiosInstance } from '@/lib/axios';
import { IFormCreateReview, Review } from '@/types/review.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation'
import React from 'react'

const useCreateReviews = () => {
    // const router = useRouter();
    const createReview = async (payload: IFormCreateReview) => {
        try {
            const {
                // rating,
                comment,
                createdAt,
                eventId,
                userId,
            } = payload;

            const createReviewForm = new FormData();

            // createReviewForm.append('rating', String(rating));
            createReviewForm.append('comment', comment);
            createReviewForm.append('createdAt', String(createdAt));
            createReviewForm.append('eventId', String(eventId));
            createReviewForm.append('userId', String(userId));

            // const createReviewForm = {
            //     rating: 5,
            //     comment: 'skdjhfkjdhfjh',
            //     createdAt: new Date(),
            //     eventId: 1,
            //     userId: 1,
            //  }

            await axiosInstance.post<Review>('/events', createReviewForm)

        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error);
            }
        }
    }
  return { createReview }
}

export default useCreateReviews;