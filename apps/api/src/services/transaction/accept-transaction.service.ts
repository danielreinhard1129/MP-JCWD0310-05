import prisma from '@/prisma';
import { Transaction } from '@prisma/client';

export const acceptTransactionService = async (
  body: Pick<Transaction, 'id'>,
): Promise<Transaction> => {
  try {
    const { id } = body;

    //add referred
    const existingTrasaction = await prisma.transaction.findFirst({
      where: { id: id },
      select: { status: true }
    })

    // if (!existingTrasaction) {
    //   throw new Error('User not Found!')
    // }
    return await prisma.transaction.update({
      where: { id: id },
      data: { status: 'COMPLETE' },
    });

  } catch (error) {
    throw error;
  }
};