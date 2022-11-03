// import { Model, model, Schema } from 'mongoose';
import { model, Schema } from 'mongoose';
import Joi from 'joi';

export interface ITodo extends Document {
  title: string;
  todo: string;
}

const addSchema: Joi.ObjectSchema<any> = Joi.object({
  todo: Joi.string().min(2),
  title: Joi.string().min(2),
  private: Joi.boolean(),
  completed: Joi.boolean()
});

const todoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: false
    },
    todo: {
      type: String,
      required: false
    },
    private: {
      type: Boolean,
      required: false
    },
    completed: {
      type: Boolean,
      required: false
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { versionKey: false, timestamps: true }
);

// const Todo: Model<ITodo> = model('todo', todoSchema);
const Todo = model('todo', todoSchema);

export { Todo, addSchema };
