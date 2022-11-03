import { Response, Request, NextFunction } from 'express';
import createError from '../helpers/createError';
import { User } from '../models/User';
import { IUser } from '../types/user.type';

interface TypedRequestBody<T> extends Request {
  body: T;
}

export const isExistNewUser = async (
  req: TypedRequestBody<IUser>,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  try {
    // Перевіряємо, чи є користувач з таким email. Для цього викор. метод findOne()
    const user = await User.findOne({ email });
    // якщо юзер є з таким емейл, то людина вже зареєстрована
    if (user) {
      throw createError(409, `${email} in use`);
    }
    next();
  } catch (error) {
    next(error);
  }
};
