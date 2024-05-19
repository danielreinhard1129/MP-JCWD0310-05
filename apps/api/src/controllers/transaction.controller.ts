
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

import { acceptTransactionService } from '@/services/transaction/accept-transaction.service';
import { getTransactionByCustomerService } from '@/services/transaction/get-transactionbycustomer.service';
import { getTransactionsByOrganozerService } from '@/services/transaction/get-transactionbyorganizer.service';
import { rejectTransactionService } from '@/services/transaction/reject-transaction.service';
import { NextFunction, Request, Response } from 'express';

export class TransactionController {
  async getTransactionByCustomerController(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        id: parseInt(req.query.id as string),
        take: parseInt(req.query.take as string) || 1000000,
        page: parseInt(req.query.page as string) || 1,
        sortBy: parseInt(req.query.sortBy as string) || 'createdAt',
        sortOrder: parseInt(req.query.sortOrder as string) || 'desc',
        status: req.query.status as string,
      };
      const result = await getTransactionByCustomerService(query);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getTransactionByOrganozerController(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        id: parseInt(req.query.id as string),
        take: parseInt(req.query.take as string) || 1000000,
        page: parseInt(req.query.page as string) || 1,
        sortBy: parseInt(req.query.sortBy as string) || 'createdAt',
        sortOrder: parseInt(req.query.sortOrder as string) || 'desc',
        status: req.query.status as string,
      };
      const result = await getTransactionsByOrganozerService(query);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  // GET TRANSACTIONS
  // async getTransactionsController(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction,
  // ) {
  //   try {
  //     const query = {
  //       id: parseInt(req.query.id as string),
  //       take: parseInt(req.query.take as string) || 8,
  //       page: parseInt(req.query.page as string) || 1,
  //       sortBy: parseInt(req.query.sortBy as string) || 'createdAt',
  //       sortOrder: parseInt(req.query.sortOrder as string) || 'desc',
  //       search: req.query.search as string,
  //     };
  //     const result = await getTransactionsService(query);
  //     return res.status(200).send(result);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  async getAcceptController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await acceptTransactionService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getRejectController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await rejectTransactionService(req.body);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}

