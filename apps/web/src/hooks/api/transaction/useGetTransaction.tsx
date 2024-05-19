'use client';
import { toast } from '@/components/ui/use-toast';
import { axiosInstance } from '@/lib/axios';
import { cn } from '@/lib/utils';
import { Profile } from '@/types/profile.types';
import { Transaction } from '@/types/transaction.type';
import { User } from '@/types/user.type';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useGetTransaction = (id: number) => {
  const [data, setData] = useState<Transaction | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const { data } = await axiosInstance.get<Transaction>(`/transaction/${id}`);
      setData(data);
      // console.log(data);
      
    } catch (error) {
      // if (error instanceof AxiosError) {
      //   toast({
      //     className: cn(
      //       'top-0 right-0 flex fixed md:max-w-[420px] md:top-16 md:right-4 border-mythemes-darkpink text-mythemes-darkpink'
      //     ),
      //     variant: 'default',
      //     title: error?.response?.data,
      //   })
      // }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [id,data]);
  return { transaction: data, isLoading, refetch: getUser };
};

export default useGetTransaction;