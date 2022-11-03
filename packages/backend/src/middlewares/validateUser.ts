import { Response, Request, NextFunction } from 'express';
import createError from '../helpers/createError';
import { authSchema } from '../models/User';

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = authSchema.validate(req.body);
    if (error) {
      throw createError(400, 'Missing required user name field');
    }
    next();
  } catch (error) {
    next(error);
  }
};
