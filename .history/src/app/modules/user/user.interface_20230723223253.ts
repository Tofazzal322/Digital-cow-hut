// import { Model, Types } from 'mongoose';
// import { IAdmin } from '../admin/admin.interface';
// import { IFaculty } from '../faculty/faculty.interface';
// import { IStudent } from '../student/student.interface';

import { ENUM_USER_ROLE } from "../../../enums/user";

// export type IUser = {
//   id: string;
//   role: string;
//   password: string;
//   student?: Types.ObjectId | IStudent;
//   faculty?: Types.ObjectId | IFaculty;
//   admin?: Types.ObjectId | IAdmin;
// };
// export type UserModel = Model<IUser, Record<string, unknown>>;

interface IUser extends Document {
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