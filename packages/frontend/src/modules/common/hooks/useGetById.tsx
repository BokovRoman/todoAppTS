import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import TodoService from '../../services/todo.service';
import { APP_KEYS } from '../consts';

export const useGetById = (id: string) => {
  const query = useQuery([APP_KEYS.QUERY_KEYS.TODOS, id], () => TodoService.getById(id), {
    onError: (error: any) => {
      toast.error(error.message);
    }
  });

  return query;
};
