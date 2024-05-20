import prisma from '@/prisma';
import { PaginationQueryParams } from '@/types/pagination.type';
import { Prisma } from '@prisma/client';

interface GetEventsQuery extends PaginationQueryParams {
  search: string;
  category: string;
}

export const getEventsService = async (query: GetEventsQuery) => {
  try {
    const { page, sortBy, sortOrder, take, search, category } = query;
    const whereClause: Prisma.EventWhereInput = {
      // title: { contains: search },
      // category: {equals: category}
      ...(search && {title: {contains: search}}),
      ...(category && {title: {equals: category}})
    };

    const events = await prisma.event.findMany({
      where: whereClause,
      skip: (page - 1) * take,
      take: take,
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: { user: true },
    });
    const count = await prisma.event.count({ where: whereClause });
    return {
      data: events,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
