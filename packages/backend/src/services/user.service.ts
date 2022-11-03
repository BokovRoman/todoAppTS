import { User } from '../models/User';
import { IUser } from '../types/user.type';

export default class UserService {
  async register(body: IUser, hashPassword: string) {
    const result = await User.create({ ...body, password: hashPassword });
    return result;
  }

  async login(id: string, token: string) {
    const result = await User.findByIdAndUpdate(id, { token });
    return result;
  }

  async logout(id: string) {
    const result = await User.findByIdAndUpdate(id, { token: '' });
    return result;
  }

  async changePassword(id: string, newPassword: string) {
    const result = await User.findByIdAndUpdate(id, { password: newPassword });
    return result;
  }
}
