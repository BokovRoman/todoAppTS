import { Response, Request, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import createError from '../helpers/createError';
import { User } from '../models/User';
import { IUser } from '../types/user.type';

interface TypedRequestBody<T> extends Request {
  body: T;
}

export const isExistUser = async (
  req: TypedRequestBody<IUser>,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw createError(401, 'Not authorized');
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      throw createError(401, 'Not authorized');
    }

    next();
  } catch (error) {
    next(error);
  }
};
