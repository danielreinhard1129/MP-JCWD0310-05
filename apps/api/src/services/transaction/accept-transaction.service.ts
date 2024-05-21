import prisma from '@/prisma';
import { Transaction } from '@prisma/client';

export const acceptTransactionService = async (
  body: Pick<Transaction, 'id'>,
// ): Promise<Transaction> => {
) => {
  try {
    const { id } = body;

    //add referred
    const existingTrasaction = await prisma.transaction.findFirst({
      where: { id: id },
      select: { status: true, quantity: true, eventId: true }
    })

    if (!existingTrasaction) {
      throw new Error('Transaction not Found!')
    }

    const lastBooked = await prisma.event.findFirst({
      where: {id: existingTrasaction.eventId},
      select: {booked: true}
    })

    const updateBooked = Number(lastBooked?.booked) + Number(existingTrasaction.quantity)

    await prisma.event.update({
      where: {id: existingTrasaction.eventId },
      data: {booked: updateBooked}
    })

    return await prisma.transaction.update({
      where: { id: id },
      data: { status: 'COMPLETE' },
    });

  } catch (error) {
    throw error;
  }
};