'use client';

import { axiosInstance } from '@/lib/axios';
import { IPaginationMeta, IPaginationQueries } from '@/types/pagination.type';
import { Transaction } from '@/types/transaction.type';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface IGetEventsQuery extends IPaginationQueries {
  id: number;
  status?: string;
}

const useGetTransactionsByOrganizer = (queries: IGetEventsQuery) => {
  const [data, setData] = useState<Transaction[]>([]);
  const [meta, setMeta] = useState<IPaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getTransactions = async () => {
    try {
      const { data } = await axiosInstance.get(`/transaction/organizer`,{
        params: queries,
      })

      setData(data.data)
      setMeta(data.meta)
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    };
  }

  useEffect(() => {
    getTransactions();
  
  }, [queries?.page, queries.id]);

  return { data, isLoading, meta, refetch: getTransactions };

}

export default useGetTransactionsByOrganizer