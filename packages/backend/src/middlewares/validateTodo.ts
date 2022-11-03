import { Response, Request, NextFunction } from 'express';
import createError from '../helpers/createError';
import { addSchema } from '../models/Todo';

export const validateTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      throw createError(400, 'Missing required name field');
    }
    next();
  } catch (error) {
    next(error);
  }
};
