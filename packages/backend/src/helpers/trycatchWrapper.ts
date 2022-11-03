import { Response, Request, NextFunction } from 'express';
import createError from './createError';
import { ITodo } from '../types/todos.type';

type GenericFunction = (
  req: Request<{ todoId: string }, any, ITodo>,
  res: Response,
  next: NextFunction
) => any;

export const tryCatchWrapper = (ctrl: GenericFunction) => {
  const func = async (
    req: Request<{ todoId: string }, any, ITodo>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const result = await ctrl(req, res, next);
      if (!result) {
        throw createError(404);
      }
      res.json(result);
    } catch (error) {
      next(error);
    }
  };
  return func;
};
