import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import createError from '../helpers/createError';
import { User } from '../models/User';
// import { ITodo } from '../types/todos.type';
import { IUser } from '../types/user.type';

const { JWT_SECRET } = process.env;

// interface TypedRequestBody<T> extends Request {
//   body: T;
// }

interface JwtPayload {
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization = '' } = req.headers;

  const [bearer, token] = authorization.split(' ');
  if (bearer !== 'Bearer') {
    next(createError(401));
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET) as JwtPayload;

    const user = await User.findById(id);
    // if (!user || !user.token) {
    //   next(createError(401, 'Not authorized'));
    // }
    if (!user) {
      next(createError(401, 'Not authorized'));
    }

    req.user = user;
    // console.log(req.user);
    next();
  } catch (error) {
    next(createError(401, 'Not authorized'));
  }
};

export { login };
