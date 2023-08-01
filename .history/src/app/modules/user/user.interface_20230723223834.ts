import { Model} from 'mongoose';
import { ENUM_USER_ROLE } from "../../../enums/user";
export type IUser= {
  password: string;
  role: ENUM_USER_ROLE;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
  createdAt: Date;
  updatedAt: Date;
}
export type UserModel = Model<IUser, Record<string, unknown>>;