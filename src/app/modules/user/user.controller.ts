import { Request, Response, NextFunction } from 'express';
import { IUser } from './user.interface'; // Update the path to your user.interface.ts file
import {
  createUser as createUserDb,
  getAllUsers as getAllUsersDb,
  getSingleUser as getSingleUserDb,
  updateSingleUser as updateSingleUserDb,
  deleteSingleUser as deleteSingleUserDb,
} from './user.service';

// Create User
export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userData: IUser = req.body;
    const newUser = await createUserDb(userData);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

// Get all Users
export const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await getAllUsersDb();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

// Get Single User
export const getSingleUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.params.id;
    const user = await getSingleUserDb(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    next(err);
  }
};

// Update Single User
export const updateSingleUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.params.id;
    const userData: IUser = req.body;
    const updatedUser = await updateSingleUserDb(userId, userData);
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(updatedUser);
    }
  } catch (err) {
    next(err);
  }
};

// Delete Single User
export const deleteSingleUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.params.id;
    const deletedUser = await deleteSingleUserDb(userId);
    if (!deletedUser) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(deletedUser);
    }
  } catch (err) {
    next(err);
  }
};