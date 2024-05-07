import prisma from '@/prisma';
import { Event } from '@prisma/client';

interface CreateBlogBody
  extends Omit<
    Event,
    'id' | 'deleteAt' | 'createAt' | 'updatedAt' | 'thumbnail'
  > {}

export const createEventService = async (
  body: CreateBlogBody,
  file: Express.Multer.File,
) => {
  try {
    const { title, userId } = body;

    const existingTitle = await prisma.event.findFirst({
      where: { title },
    });

    if (existingTitle) {
      throw new Error('title alredy in use');
    }

    const user = await prisma.user.findFirst({ where: { id: Number(userId) } });

    if (!user) {
      throw new Error('user not found');
    }

    return await prisma.event.create({
      data: {
        ...body,
        thumbnail: 'image',
        userId: Number(userId),
        
      }, 
    });
  } catch (error) {
    throw error;
  }
};
