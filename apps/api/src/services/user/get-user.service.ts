import prisma from "@/prisma"

export const getUserService = async (id: number) => {
    try {
        const user = await prisma.user.findFirst({
            where: {id},
            include: {Event: true},
        })

        if(!user) {
            throw new Error('User not Found!')
        }

        return user;
    } catch (error) {
        throw error
    }
}