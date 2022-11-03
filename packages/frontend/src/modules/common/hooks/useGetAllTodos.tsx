import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import TodoService from '../../services/todo.service';
import { APP_KEYS } from '../consts';

export const useGetAllTodos = (
  title: string,
  isPrivate: boolean,
  isCompleted: boolean,
  all: boolean
) => {
  let params = '';

  if (all) {
    params = '';
  }

  if (all && title !== '') {
    params = `title=${title}`;
  }

  if ((isPrivate || !isPrivate) && !all) {
    params = `private=${isPrivate}`;
  }

  if ((isPrivate || !isPrivate) && title !== '' && !all) {
    params = `title=${title}&private=${isPrivate}`;
  }

  if (isCompleted && !all) {
    params = `completed=${isCompleted}`;
  }

  if (isCompleted && title !== '' && !all) {
    params = `title=${title}&completed=${isCompleted}`;
  }

  const query = useQuery(APP_KEYS.QUERY_KEYS.TODOS, () => TodoService.getAllTodos(params), {
    onError: (error: any) => {
      toast.error(error.message);
    }
  });

  return query;
};
