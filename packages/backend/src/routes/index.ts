import { Application, Response, Request, NextFunction } from 'express';
import todosRouter from './api/todos.route';
import userRouter from './api/user.route';
import { IError } from '../types/todos.type';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (_req, res) => {
      res.send('Hello world');
    });
    this.app.use('/api/todos', todosRouter);
    this.app.use('/api/user', userRouter);
    this.app.use((req: Request, res: Response) => {
      res.status(404).json({ message: 'Not found' });
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
      const { status = 500, message = 'Server error' } = err;
      res.status(status).json({ message });
    });
  }
}

export default AppRouter;
