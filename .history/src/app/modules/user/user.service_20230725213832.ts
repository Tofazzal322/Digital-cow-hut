
import { UserModel } from './user.model';
import { IUser } from './user.interface'; 
import { sellerValidationSchema } from '../seller/seller.validation';
import { ISeller } from '../seller/seller.interface';
import { SellerModel } from '../seller/seller.model';
import { z } from 'zod';


export const createSeller = async (
  sellerData: z.infer<typeof sellerValidationSchema>
): Promise<ISeller> => {
  try {
    const newSeller = await SellerModel.create(sellerData);
    return newSeller;
  } catch (error();
  ) {
    throw Error;
  }
};


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
