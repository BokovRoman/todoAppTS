import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import TodoService from '../../services/todo.service';
import { APP_KEYS } from '../consts';

export const useRemoveById = () => {
  const client = useQueryClient();

  const mutate = useMutation((id: string) => TodoService.removeById(id), {
    onSuccess: () => {
      toast.success('Delete todo succeful');
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSettled() {
      client.invalidateQueries(APP_KEYS.QUERY_KEYS.TODOS);
    }
  });

  return mutate;
};
