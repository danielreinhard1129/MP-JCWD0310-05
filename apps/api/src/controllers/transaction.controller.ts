// import { createTransactionService } from '@/services/transaction/create-transcaction-service';
// import { getTransactionService } from '@/services/transaction/get-transaction-service';
// import { NextFunction, Request, Response } from 'express';

// export class TransactionController {
//   async createTransactionController(
//     req: Request,
//     res: Response,
//     next: NextFunction,
//   ) {
//     try {
//       const result = await createTransactionService(req.body);
//       // console.log(result);

//       return res.status(201).send(result);
//     } catch (error) {
//       next(error);
//     }
//   }
//   async getEventController(req: Request, res: Response, next: NextFunction) {
//     try {
//       const id = req.params.id;
//       const result = await getTransactionService(Number(id));

//       return res.status(200).send(result);
//     } catch (error) {
//       next(error);
//     }
//   }
// }
