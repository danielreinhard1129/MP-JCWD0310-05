import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  static as static_
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import { EventRouter } from './routers/event.router';
import { AuthRouter } from './routers/auth.router';
import {join} from 'path'
import { UserRouter } from './routers/user.router';
import { TransactionRouter } from './routers/transaction.router';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use('/api/assets', static_(join(__dirname, '../public')));
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error : ', err.stack);
          res.status(500).send(err.message);
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    const eventRouter = new EventRouter();
    const authRouter = new AuthRouter();
    const userRouter = new UserRouter();
    const transactionRouter = new TransactionRouter()

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student !`);
    });

    this.app.use('/api/events', eventRouter.getRouter());
    this.app.use('/api/review', eventRouter.getRouter());
    this.app.use('/api/auth', authRouter.getRouter());
    this.app.use('/api/user', userRouter.getRouter());
    this.app.use('/api/transaction', transactionRouter.getRouter());
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
