import prisma from '@/prisma';
import { Event, Transaction } from '@prisma/client';
import { scheduleJob } from 'node-schedule';

interface CreateTransactionBody
  extends Omit<
    Transaction,
    'id' | 'deleteAt' | 'createAt' | 'updatedAt' 
  > {}

export const createTransactionService = async (
  body: CreateTransactionBody,
  
) => {
  try {
    const {eventId, userId, quantity} = body;

    const user = await prisma.user.findFirst({
      where: { id: Number(userId) },
    });

    if (!user) {
      throw new Error('user not found');
    }

    
    const event = await prisma.event.findFirst({
      where: { id: Number(eventId) },
    });
    
    if (!event) {
      throw new Error('event not found');
    }

    if (event.price === null) {
      throw new Error('event price is null');
    }

    const total = event?.price * quantity;

    return await prisma.transaction.create({
      data: {
        ...body,
        totalPrice: Number(total),
        userId: Number(userId),
        eventId: Number(eventId)
      },
      include: {
        event: true,
        user: true,
      }
    })

    const shcedule = new Date(Date.now() + 5 * 1000);
      scheduleJob('run every ', shcedule, async () => {

      })
  } catch (error) {
    throw error;
  }
};
