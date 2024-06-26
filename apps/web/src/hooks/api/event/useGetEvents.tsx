'use client';

import { axiosInstance } from '@/lib/axios';
import { IPaginationMeta, IPaginationQueries } from '@/types/pagination.type';
import { useEffect, useState } from 'react';
import { Event } from '@/types/event.type';

interface IGetEventsQuery extends IPaginationQueries {
  search?: string;
  category?: string;
}

const useGetEvents = (queries: IGetEventsQuery) => {
  const [data, setData] = useState<Event[]>([]);
  const [meta, setMeta] = useState<IPaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getEvents = async () => {
    try {
      const { data } = await axiosInstance.get('/events', {
        params: queries,
      });
      setData(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, [queries?.page, queries?.search]);
  return { data, meta, isLoading };
};

export default useGetEvents;
