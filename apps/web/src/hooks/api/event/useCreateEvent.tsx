'use client';

import { axiosInstance } from '@/lib/axios';
import { Event, IFormCreateEvent } from '@/types/event.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FileWithPath } from 'react-dropzone';
import { string } from 'yup';

const useCreateEvent = () => {
  const router = useRouter();
  const createEvent = async (payload: IFormCreateEvent) => {
    try {
      const {
        title,
        category,
        content,
        description,
        thumbnail,
        userId,
        startDate,
        ticketLimit,
        endDate,
        city,
        venue,
        price,
      } = payload;

      const createEventForm = new FormData();

      createEventForm.append('title', title);
      createEventForm.append('category', category);
      createEventForm.append('content', content);
      createEventForm.append('description', description);
      createEventForm.append('userId', String(userId));
      createEventForm.append('startDate', startDate);
      createEventForm.append('endDate', endDate);
      createEventForm.append('city', city);
      createEventForm.append('venue', venue);
      createEventForm.append('price', String(price));
      createEventForm.append('ticketLimit', String(ticketLimit));

      thumbnail.forEach((file: FileWithPath) => {
        createEventForm.append('thumbnail', file);
      });

      await axiosInstance.post<Event>('/events', createEventForm);

      // toast success here
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        //TODO: put toast here
        console.log(error);
      }
    }
  };
  return { createEvent };
};

export default useCreateEvent;
