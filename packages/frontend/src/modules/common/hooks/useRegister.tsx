import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import UserService from '../../services/user.service';
import { IUser } from '../types/user.types';

export const useRegister = () => {
  // const client = useQueryClient();
  const history = useHistory();

  const mutate = useMutation((credentials: IUser) => UserService.register(credentials), {
    onSuccess: () => {
      toast.success('Registration was successful. Log in to enter your account!');
      history.push('/login');
    },
    onError: (error: any) => {
      toast.error(error.message);
    }
  });

  return mutate;
};
