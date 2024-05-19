import prisma from "@/prisma"
import { Prisma } from "@prisma/client";

export const getTransactionsByOrganozerService = async (id: string) => {
  try {
    // const transaction = await prisma.transaction.findMany({
    //   where: { userId: Number(id) },
    //   include: { user: true, event: true },
    // });
    const whereClause: Prisma.TransactionWhereInput = {
      event: { userId:  Number(id) } 
    }

    const transaction = await prisma.transaction.findMany({
      where: {event:{user:{id:Number(id)}}},
      include: { user: true, event: true },
      });


    if (!transaction) {
      throw new Error('User not Found!')
    }

    return transaction;
  } catch (error) {
    throw error
  }
}


// import prisma from '@/prisma';
// import { PaginationQueryParams } from '@/types/pagination.type';
// import { Prisma } from '@prisma/client';

// interface GetTransactionsQuery extends PaginationQueryParams {
//   id: number;
//   search: string;
// }
