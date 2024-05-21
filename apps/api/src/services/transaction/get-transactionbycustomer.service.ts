import prisma from "@/prisma"
import { PaginationQueryParams } from "@/types/pagination.type";
import { Prisma, TransactionStatus } from "@prisma/client";

interface GetEventsQuery extends PaginationQueryParams {
    id: number;
    status?: TransactionStatus;
  }


export const getTransactionByCustomerService = async (query: GetEventsQuery) => {
    try {
        const { page, sortBy, sortOrder, take, id, status } = query;
    
        const whereClause: Prisma.TransactionWhereInput = {
          status: status,
          userId: Number(id),
        }
    
        const transaction = await prisma.transaction.findMany({
          //where: {event:{user:{id:Number(id)}}},
          where: whereClause,
          skip: (page - 1) * take,
          take: take,
          orderBy: {
            [sortBy]: sortOrder,
          },
          include: { user: true, event: true },
        });
    
        const count = await prisma.transaction.count({ where: whereClause });
    
        if (!transaction) {
          throw new Error('User not Found!')
        }
    
        return {
          data: transaction,
          meta: { page, take, total: count }
        };
      } catch (error) {
        throw error
      }
    }
    