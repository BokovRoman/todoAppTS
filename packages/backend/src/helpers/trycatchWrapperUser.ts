import { Response, Request, NextFunction } from 'express';
import createError from './createError';
import { IUser } from '../types/user.type';

type GenericFunction = (
  req: Request<{ todoId: string }, any, IUser>,
  res: Response,
  next: NextFunction
) => any;

export const tryCatchWrapperUser = (ctrl: GenericFunction) => {
  const func = async (
    req: Request<{ todoId: string }, any, IUser>,
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
