import { Schema, model } from 'mongoose';
import { IUser} from './user.interface';
import { ENUM_USER_ROLE } from '../../../enums/user';

const userSchema = new Schema<IUser>(
  {
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(ENUM_USER_ROLE), required: true },
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    budget: { type: Number, default: 0 },
    income: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const UserModel = model<IUser>('User', userSchema);
