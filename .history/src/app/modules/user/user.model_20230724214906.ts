// import { Schema, model } from 'mongoose';
// import { IUser} from './user.interface';
// import { ENUM_USER_ROLE } from '../../../enums/user';

// const userSchema = new Schema<IUser>(
//   {
//     password: { type: String, required: true },
//     role: { type: String, enum: Object.values(ENUM_USER_ROLE), required: true },
//     name: {
//       firstName: { type: String, required: true },
//       lastName: { type: String, required: true },
//     },
//     phoneNumber: { type: String, required: true },
//     address: { type: String, required: true },
//     budget: { type: Number, default: 0 },
//     income: { type: Number, default: 0 },
//   },
//   { timestamps: true }
// );

// export const UserModel = model<IUser>('User', userSchema);

// import { Schema, model } from 'mongoose';
// import { ENUM_USER_ROLE } from '../../../enums/user'; // Update the path to your enums file
// import { IUser } from './user.interface'; // Update the path to your user.interface.ts file

// // Create the userSchema
// const userSchema = new Schema<IUser>(
//   {
//     password: { type: String, required: true },
//     role: { type: String, enum: Object.values(ENUM_USER_ROLE), required: true },
//     name: {
//       firstName: { type: String, required: true },
//       lastName: { type: String, required: true },
//     },
//     phoneNumber: { type: String, required: true },
//     address: { type: String, required: true },
//     budget: { type: Number, default: 0 },
//     income: { type: Number, default: 0 },
//   },
//   { timestamps: true }
// );

// // Create and export the UserModel
// export const UserModel = model<IUser>('User', userSchema);

import { Schema, model } from 'mongoose';
import { ENUM_USER_ROLE } from '../../../enums/user'; // Update the path to your enums file
import { IUser } from './user.interface'; // Update the path to your user.interface.ts file

// Create the userSchema
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

// Create and export the UserModel
export const UserModel = model<IUser>('User', userSchema);
