import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import UserService from '../../services/user.service';
import { APP_KEYS } from '../consts';
// import { ITodo } from '../types/todos.type';

export const useGetCurrentUser = () => {
  const query = useQuery(APP_KEYS.QUERY_KEYS.USER, () => UserService.current(), {
    onError: (error: any) => {
      toast.error(error.message);
    }
  });

  return query;
};
