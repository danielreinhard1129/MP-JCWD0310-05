'use client';


import { toast } from '@/components/ui/use-toast';
import { axiosInstance } from '@/lib/axios';
import { cn } from '@/lib/utils';
import { useAppDispatch } from '@/redux/hooks';
import { loginAction } from '@/redux/slices/userSlice';
import { User } from '@/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
interface LoginArgs extends Pick<User, 'email' > {
  password: string;
}


interface LoginResponse {
  message: string;
  data: User;
  token: string;
}

const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const login = async (payload: LoginArgs) => {
    try {
        console.log(payload);
        
      const { data } = await axiosInstance.post<LoginResponse>('/auth/login',payload);
      dispatch(loginAction(data.data));
      localStorage.setItem('token', data.token);
      if (data.data.role === 'organizer') {
        toast({
          className: cn(
            'top-0 right-0 flex fixed md:max-w-[420px] md:top-16 md:right-4 border-mythemes-blue text-mythemes-blue'
          ),
          variant: 'default',
          title: 'Login as Organizer Success',
        })
        router.replace('/dashboard-organizer');
      } else {
        toast({
          className: cn(
            'top-0 right-0 flex fixed md:max-w-[420px] md:top-16 md:right-4 border-mythemes-blue text-mythemes-blue'
          ),
          variant: 'default',
          title: 'Login as Customer Success',
        })
        router.replace('/');
      }
    
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
  return { login };
};

export default useLogin;