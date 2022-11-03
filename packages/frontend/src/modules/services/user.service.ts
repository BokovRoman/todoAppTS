import { HttpSerivce } from './http.service';
import { IUser } from '../common/types/user.types';

// interface IResponse {
//   data: ITodo[];
// }

class UserService extends HttpSerivce {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  register(credentials: IUser) {
    return this.add(
      {
        url: 'user/register',
        data: credentials
      },
      false
    );
  }

  login(credentials: IUser) {
    return this.add(
      {
        url: 'user/login',
        data: credentials
      },
      false
    );
  }

  changePassword(credentials: IUser) {
    return this.add({
      url: 'user/change-password',
      data: credentials
    });
  }

  logout() {
    const result = this.get({ url: 'user/logout' }, true);
    return result;
  }

  current() {
    const result = this.get({ url: 'user/current' }, true);
    return result;
  }
}

export default new UserService();
