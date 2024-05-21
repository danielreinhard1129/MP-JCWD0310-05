import prisma from '@/prisma';
import { Transaction } from '@prisma/client';

export const rejectTransactionService = async (
    body: Pick<Transaction, 'id'>,
) => {
    try {
        const { id } = body;

        //add referred
        const existingTrasaction = await prisma.transaction.findFirst({
            where: { id: id },
            select: { status: true, userId: true, userPoints: true }
        })

        if (!existingTrasaction) {
            throw new Error('User not Found!')
        }

        // const userPoints = await prisma.user.findFirst({
        //     where: {id: existingTrasaction.userId},
        //     select: {points: true}
        // })         

        await prisma.user.update({
            where: {id: existingTrasaction.userId},
            data: {points: Number(existingTrasaction.userPoints)}
        })      

    
        return await prisma.transaction.update({
            where: { id: id },
            data: { status: 'CANCELED' },
        });


    } catch (error) {
        throw error;
    }
};