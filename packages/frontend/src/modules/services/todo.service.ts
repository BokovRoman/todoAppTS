import { HttpSerivce } from './http.service';
import { IAddTodo, IStatusPrivate, IStatusCompleted } from '../common/types/todos.type';

class TodoService extends HttpSerivce {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  getAllTodos(params: string) {
    const result = this.get({ url: `todos/?${params}` }, true);
    return result;
  }

  addTodo(todo: IAddTodo) {
    return this.add(
      {
        url: 'todos',
        data: todo
      },
      true
    );
  }

  getById(todoId: string) {
    return this.getOne(
      {
        url: 'todos',
        id: todoId
      },
      true
    );
  }

  removeById(todoId: string) {
    return this.remove(
      {
        url: 'todos',
        id: todoId
      },
      true
    );
  }

  updateById(todo: IAddTodo, todoId: string) {
    return this.put(
      {
        url: 'todos',
        data: todo,
        id: todoId
      },
      true
    );
  }

  updatePrivate(privateStatus: IStatusPrivate, todoId: string) {
    return this.updatePrivateField(
      {
        url: 'todos',
        data: privateStatus,
        id: todoId
      },
      true
    );
  }

  updateCompleted(completedStatus: IStatusCompleted, todoId: string) {
    return this.updateCompletedField(
      {
        url: 'todos',
        data: completedStatus,
        id: todoId
      },
      true
    );
  }
}

export default new TodoService();
