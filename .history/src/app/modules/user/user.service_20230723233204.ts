/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// src/services/userServices.ts

import { User, UserModel } from '../user/user.model';


export const createUser = async (userData: User) => {
  const newUser = await UserModel.create(userData);
  return newUser;
};

export const getAllUsers = async () => {
  const users = await UserModel.find();
  return users;
};

export const getSingleUser = async (userId: string) => {
  const user = await UserModel.findById(userId);
  return user;
};

export const updateSingleUser = async (userId: string, userData: User) => {
  const updatedUser = await UserModel.findByIdAndUpdate(userId, userData, {
    new: true,
  });
  return updatedUser;
};

export const deleteSingleUser = async (userId: string) => {
  const deletedUser = await UserModel.findByIdAndDelete(userId);
  return deletedUser;
};
