// import prisma from "@/prisma"

// export const getTransactionService = async (id: number) => {
//     try {
//         const event = await prisma.transaction.findFirst({
//             where: {id},
//             include: {user: true, event: true},
//         })

//         if(!event) {
//             throw new Error('transaction not found')
//         }

//         return event;
//     } catch (error) {
//         throw error
//     }
// }