import { Request } from 'express';
import TodoService from '../services/todo.service';
import { ITodo } from '../types/todos.type';

interface TypedRequestBody<T> extends Request {
  body: T;
}

interface IPrivate {
  private: boolean;
}

interface ICompleted {
  completed: boolean;
}

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(req: TypedRequestBody<ITodo>) {
    const { id: owner } = req.user;
    const params = { ...req.query, owner };
    const todos = await this.todoService.findAll(params);
    return todos;
  }

  async addTodo(req: TypedRequestBody<ITodo>) {
    const { id: owner } = req.user;

    const result = await this.todoService.addTodo({ ...req.body, owner });
    return result;
  }

  async getById(req: Request<{ todoId: string }>) {
    const { todoId } = req.params;
    const result = await this.todoService.getById(todoId);
    return result;
  }

  async removeById(req: Request<{ todoId: string }>) {
    const { todoId } = req.params;
    const result = await this.todoService.removeById(todoId);
    return result;
  }

  async updateById(req: Request<{ todoId: string }, any, ITodo>) {
    const { todoId } = req.params;
    const result = await this.todoService.updateById(todoId, req.body, { new: true });
    return result;
  }

  async updateStatusPrivate(req: Request<{ todoId: string }, any, IPrivate>) {
    const { todoId } = req.params;
    const result = await this.todoService.updateStatusPrivate(todoId, req.body, { new: true });
    return result;
  }

  async updateStatusCompleted(req: Request<{ todoId: string }, any, ICompleted>) {
    const { todoId } = req.params;
    const result = await this.todoService.updateStatusCompleted(todoId, req.body, { new: true });
    return result;
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
