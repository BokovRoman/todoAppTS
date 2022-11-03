export interface IUser {
  email: string;
  password: string;
  newPassword?: string;
}

export interface ILoginResponse {
  token: string;
  user: {
    email: string;
    _id: string;
  };
}
