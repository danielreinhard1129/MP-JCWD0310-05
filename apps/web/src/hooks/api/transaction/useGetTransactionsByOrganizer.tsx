'use client';

import { axiosInstance } from '@/lib/axios';
import { Transaction } from '@/types/transaction.type';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useGetTransactionsByOrganizer = (id: Number) => {
  const [data, setData] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getTransactions = async () => {
    try {
      const { data } = await axiosInstance.get(`/transaction/organizer?id=${id}`)
      setData(data)
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
  }, []);

  return { data, isLoading, refetch: getTransactions };

}

export default useGetTransactionsByOrganizer