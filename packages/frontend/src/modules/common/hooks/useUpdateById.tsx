import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import TodoServise from '../../services/todo.service';
import { IAddTodo } from '../types/todos.type';
import { APP_KEYS } from '../consts';

interface IUpdatedTodo {
  data: IAddTodo;
  id: string;
}

export const useUpdateById = () => {
  const client = useQueryClient();

  const mutate = useMutation(
    (values: IUpdatedTodo) => TodoServise.updateById(values.data, values.id),
    {
      onSuccess: () => {
        // eslint-disable-next-line no-alert
        toast.success('Update todo succeful');
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
      onSettled() {
        client.invalidateQueries(APP_KEYS.QUERY_KEYS.TODOS);
      }
    }
  );

  return mutate;
};
