
import { UserModel } from './user.model';
import { IUser } from './user.interface'; 

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
