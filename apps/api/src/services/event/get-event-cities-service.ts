// import prisma from "@/prisma";

//  export const getCitiesService = async (id:number) => {
// try {

//     const city = await prisma.event.findMany({

//         distinct: ['city'],
//       select: { city: true },
//       });
  
//       if (!city) {
//         throw new Error('event not found');
//       }

//       return city;
// } catch (error) {
//     throw error
// }
// }