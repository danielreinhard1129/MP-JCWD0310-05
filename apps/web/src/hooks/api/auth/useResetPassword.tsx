'use client';

import { toast } from '@/components/ui/use-toast';
import { axiosWithoutToken } from '@/lib/axios';
import { cn } from '@/lib/utils';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ResetPasswordResponse {
  message: string;
}

const useResetPassword = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const resetPassword = async (password: string, token: string) => {
    try {
      setIsLoading(true);
      const { data } = await axiosWithoutToken.patch<ResetPasswordResponse>(
        '/auth/reset-password',
        { password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert(data.message);
      router.replace('/');
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
    } finally {
      setIsLoading(false);
    }
  };
  return { resetPassword, isLoading };
};

export default useResetPassword;