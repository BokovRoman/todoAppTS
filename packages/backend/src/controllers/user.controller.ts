import { Request } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserService from '../services/user.service';
import { IUser } from '../types/user.type';
import { User } from '../models/User';
// import createError from '../helpers/createError';

interface TypedRequestBody<T> extends Request {
  body: T;
}

const { JWT_SECRET } = process.env;

export class UserController {
  constructor(private userService: UserService) {}

  async register(req: TypedRequestBody<IUser>) {
    const { password } = req.body;

    // Хешуємо пароль
    const hashPassword = await bcrypt.hash(password, 10);

    const result = await this.userService.register(req.body, hashPassword);
    return result;
  }

  async login(req: TypedRequestBody<IUser>) {
    const { email } = req.body;
    const user = await User.findOne({ email });
    // Створюємо токен:
    // 1. payload - що шифрувати
    // 2. Заголовки (не обов'язкові)
    // 3. SECRET_KEY - за домопогою чого ми шифруємо
    const payload = {
      id: user._id
    };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
    const result = await this.userService.login(user._id, token);
    const resultWithToken = {
      token,
      user: result
    };
    return resultWithToken;
  }

  async changePassword(req: TypedRequestBody<IUser>) {
    const { email, newPassword } = req.body;
    // Хешуємо пароль
    const hashPassword = await bcrypt.hash(newPassword, 10);

    const user = await User.findOne({ email });

    const result = await this.userService.changePassword(user._id, hashPassword);
    const resultNewPassword = {
      password: hashPassword,
      user: result
    };
    return resultNewPassword;
  }

  async getCurrent(req: TypedRequestBody<IUser>) {
    const { email } = req.user;
    return { email };
  }

  async logout(req: TypedRequestBody<IUser>) {
    const { id } = req.user;
    const result = await this.userService.logout(id);
    return result;
  }
}

const userController = new UserController(new UserService());
export default userController;
