'use client';
import { axiosInstance } from '@/lib/axios';
import { Profile } from '@/types/profile.types';
import { User } from '@/types/user.type';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useGetUser = (id: number) => {
  const [data, setData] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const { data } = await axiosInstance.get<Profile>(`/user/${id}`);
      setData(data);
      // console.log(data);
      
    } catch (error) {
      if (error instanceof AxiosError) {
        // TODO : replace console.log with toast
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);
  return { user: data, isLoading, refetch: getUser };
};

export default useGetUser;