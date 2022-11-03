import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import TodoService from '../../services/todo.service';
import { IAddTodo } from '../types/todos.type';
import { APP_KEYS } from '../consts';

export const useAddTodo = () => {
  const client = useQueryClient();

  const mutate = useMutation((newTodo: IAddTodo) => TodoService.addTodo(newTodo), {
    onSuccess: () => {
      toast.success('Adding todo succeful');
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
