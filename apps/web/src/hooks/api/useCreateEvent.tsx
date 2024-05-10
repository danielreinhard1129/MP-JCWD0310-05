"use client"
import { axiosInstance } from '@/lib/axios'
import { Event } from '@/types/event.type'
import { useRouter } from 'next/navigation'
import React from 'react'

interface CreateEventArgs extends Omit<Event, 'id'> {
    
}

const useCreateEvent = () => {
    const router = useRouter();
    const create = async (payload: CreateEventArgs) => {
        try {
            await axiosInstance.post('/events/create-event', payload);

            //router.push('/login');
        } catch (error) {
            console.log(error)
        }
    }
  return {create}
}

export default useCreateEvent