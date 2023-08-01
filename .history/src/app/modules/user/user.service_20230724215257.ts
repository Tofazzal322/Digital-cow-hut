
// import { IUser } from './user.interface';
// import { UserModel } from './user.model';


// export const createUser = async (userData: IUser) => {
//   const newUser = await UserModel.create(userData);
//   return newUser;
// };

// export const getAllUsers = async () => {
//   const users = await UserModel.find();
//   return users;
// };

// export const getSingleUser = async (userId: string) => {
//   const user = await UserModel.findById(userId);
//   return user;
// };

// export const updateSingleUser = async (userId: string, userData: IUser) => {
//   const updatedUser = await UserModel.findByIdAndUpdate(userId, userData, {
//     new: true,
//   });
//   return updatedUser;
// };

// export const deleteSingleUser = async (userId: string) => {
//   const deletedUser = await UserModel.findByIdAndDelete(userId);
//   return deletedUser;
// };
import { UserModel } from './user.model';
import { IUser } from './user.interface'; // Update the path to your user.interface.ts file

export const createUser = async (userData: IUser): Promise<IUser> => {
  const newUser = await UserModel.create(userData);
  return newUser;
};

export const getAllUsers = async (): Promise<IUser[]> => {
  const users = await UserModel.find();
  return users;
};

export const getSingleUser = async (userId: string): Promise<IUser | null> => {
  const user = await UserModel.findById(userId);
  return user;
};

export const updateSingleUser = async (
  userId: string,
  userData: IUser
): Promise<IUser | null> => {
  const updatedUser = await UserModel.findByIdAndUpdate(userId, userData, {
    new: true,
  });
  return updatedUser;
};

export const deleteSingleUser = async (
  userId: string
): Promise<IUser | null> => {
  const deletedUser = await UserModel.findByIdAndDelete(userId);
  return deletedUser;
};
