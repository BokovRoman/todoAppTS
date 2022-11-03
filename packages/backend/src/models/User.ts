// import { Document, Model, model, Schema } from 'mongoose';
import { Document, model, Schema } from 'mongoose';
import Joi from 'joi';
// TODO: Use it as an example
/**
 * Interface to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */
export interface IUser extends Document {
  email: string;
  password: string;
  // avatar: string;
}

// Регулярний вираз для email
const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const authSchema: Joi.ObjectSchema<any> = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  newPassword: Joi.string().min(6)
});

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      required: [true, 'Email is required'],
      unique: true
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, 'Password is required']
    },
    avatar: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    },
    token: {
      type: String,
      default: null
    },
    newPassword: {
      type: String,
      minlength: 6
    }
  },
  { versionKey: false, timestamps: true }
);

// const User: Model<IUser> = model('User', userSchema);
const User = model('User', userSchema);

export { authSchema, User };
