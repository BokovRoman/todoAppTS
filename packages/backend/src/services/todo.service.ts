import { Todo } from '../models/Todo';
import { ITodo } from '../types/todos.type';

interface IParams {
  owner: string;
  title?: string;
  private?: string;
  completed?: string;
  skip?: string;
  limit?: string;
}

interface IPrivate {
  private: boolean;
}

interface ICompleted {
  completed: boolean;
}

export default class TodoService {
  async findAll(params: IParams) {
    const { owner, skip = 0, limit = 0, ...filter } = params;
    const title = filter.title ? { title: { $regex: filter.title, $options: 'i' } } : {};
    const count = await Todo.find({
      $and: [{ ...filter, ...title }, { $or: [{ private: false }, { private: true, owner }] }]
    });

    const list = await Todo.find({
      $or: [{ private: false }, { private: true, owner }]
    })
      .find({ ...filter, ...title })
      .skip(Number(skip))
      .limit(Number(limit));

    return { list, count: count.length };
  }

  async addTodo(body: ITodo) {
    const result = await Todo.create(body);
    return result;
  }

  async getById(id: string) {
    const result = await Todo.findById(id);
    return result;
  }

  async removeById(id: string) {
    const result = await Todo.findByIdAndRemove(id);
    return result;
  }

  async updateById(id: string, body: ITodo, obj: { new: boolean }) {
    const result = await Todo.findByIdAndUpdate(id, body, obj);
    return result;
  }

  async updateStatusPrivate(id: string, body: IPrivate, obj: { new: boolean }) {
    const result = await Todo.findByIdAndUpdate(id, body, obj);
    return result;
  }

  async updateStatusCompleted(id: string, body: ICompleted, obj: { new: boolean }) {
    const result = await Todo.findByIdAndUpdate(id, body, obj);
    return result;
  }
}
