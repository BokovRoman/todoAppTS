// TODO: Put a real interfaces here

export interface ITodo {
  title: string;
  todo: string;
  private: boolean;
  completed: boolean;
  owner?: string;
}

export interface IError {
  status?: number;
  message?: string;
}
