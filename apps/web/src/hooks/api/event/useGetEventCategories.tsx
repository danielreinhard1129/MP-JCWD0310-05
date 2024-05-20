// hooks/api/event/useGetEventCategories.ts
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/lib/axios';

const useGetEventCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getCategories = async () => {
    try {
      const { data } = await axiosInstance.get<string[]>('/events/categories');
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories, isLoading };
};

export default useGetEventCategories;
