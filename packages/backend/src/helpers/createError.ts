interface IMessages {
  400: string;
  401: string;
  403: string;
  404: string;
  409: string;
}

interface IError extends Error {
  status?: number;
}

const messages: IMessages = {
  400: 'Bad request',
  401: 'Unauthorize',
  403: 'Forbidden',
  404: 'Not found',
  409: 'Conflict'
};

const createError = (status: keyof IMessages, message = messages[status]) => {
  const error: IError = new Error(message);
  error.status = status;
  return error;
};

export default createError;
