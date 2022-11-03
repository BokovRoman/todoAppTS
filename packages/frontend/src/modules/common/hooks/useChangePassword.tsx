import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import UserService from '../../services/user.service';
import { IUser } from '../types/user.types';

export const useChangePassword = () => {
  const mutate = useMutation((credentials: IUser) => UserService.changePassword(credentials), {
    onSuccess: () => {
      toast.success('Password was changed');
    },
    onError: (error: any) => {
      toast.error(error.message);
    }
  });

  return mutate;
};
