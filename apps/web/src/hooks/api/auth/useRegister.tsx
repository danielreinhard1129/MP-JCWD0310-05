'use client';

import { toast } from '@/components/ui/use-toast';
import { axiosInstance } from '@/lib/axios';
import { cn } from '@/lib/utils';
import { User } from '@/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface RegisterArgs extends Omit<User, 'id' | 'referred' > {
  password: string;
}
const useRegister = () => {
  const router = useRouter();
  const register = async (payload: RegisterArgs) => {
    try {

      await axiosInstance.post('/auth/register', payload);
      router.push('/login');
    } catch (error) {          
      if (error instanceof AxiosError) {
        toast({
          className: cn(
            'top-0 right-0 flex fixed md:max-w-[420px] md:top-16 md:right-4 border-mythemes-darkpink text-mythemes-darkpink'
          ),
          variant: 'default',
          title: error?.response?.data,
        })
      }
    }
  };
  return { register };
};

export default useRegister;