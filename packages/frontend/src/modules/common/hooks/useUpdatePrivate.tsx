import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import TodoServise from '../../services/todo.service';
import { IStatusPrivate } from '../types/todos.type';
import { APP_KEYS } from '../consts';

interface IUpdatedTodo {
  data: IStatusPrivate;
  id: string;
}

export const useUpdatePrivate = () => {
  const client = useQueryClient();

  const mutate = useMutation(
    (values: IUpdatedTodo) => TodoServise.updatePrivate(values.data, values.id),
    {
      onError: (error: any) => {
        toast.error(error.message);
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSettled(...params) {
        client.invalidateQueries(APP_KEYS.QUERY_KEYS.TODOS);
      }
    }
  );

  return mutate;
};
