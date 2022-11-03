export interface ITodo {
  _id: string;
  title: string;
  todo: string;
  private: boolean;
  completed: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IAddTodo {
  title: string;
  todo: string;
  private: boolean;
  completed: boolean;
}

export interface IStatusPrivate {
  private: boolean;
}

export interface IStatusCompleted {
  completed: boolean;
}
