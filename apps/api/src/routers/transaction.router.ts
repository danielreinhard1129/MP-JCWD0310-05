import { TransactionController } from "@/controllers/transaction.controller";
import { Router } from "express";

export class TransactionRouter {
    private router: Router;
    private transactionController: TransactionController;

    constructor() {
        this.transactionController = new TransactionController();
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        //this.router.get('/', this.transactionController.getTransactionsController);
        this.router.get('/organizer', this.transactionController.getTransactionByOrganozerController);
       // this.router.get('/:id', this.transactionController.getTransactionsController);
        this.router.post('/accepting', this.transactionController.getAcceptController);
        this.router.post('/rejecting', this.transactionController.getRejectController);
      }


    getRouter(): Router {
        return this.router;
    }
}