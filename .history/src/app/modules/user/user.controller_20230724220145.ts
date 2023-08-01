// // src/controllers/userController.ts

// import { Request, Response, NextFunction } from 'express';
// import {
//   createUser,
//   getAllUsers,
//   getSingleUser,
//   updateSingleUser,
//   deleteSingleUser,
// } from '../user/user.service';

// // Create a new user
// export const createUserController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const newUser = await createUser(req.body);
//     res.status(201).json({
//       success: true,
//       statusCode: 201,
//       message: 'User created successfully',
//       data: newUser,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Get all users
// export const getAllUsersController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const users = await getAllUsers();
//     res.status(200).json({
//       success: true,
//       statusCode: 200,
//       message: 'Users retrieved successfully',
//       data: users,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Get a single user
// export const getSingleUserController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const userId = req.params.id;
//   try {
//     const user = await getSingleUser(userId);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         statusCode: 404,
//         message: 'User not found',
//         data: null,
//       });
//     }
//     res.status(200).json({
//       success: true,
//       statusCode: 200,
//       message: 'User retrieved successfully',
//       data: user,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Update a single user
// export const updateSingleUserController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const userId = req.params.id;
//   try {
//     const updatedUser = await updateSingleUser(userId, req.body);
//     if (!updatedUser) {
//       return res.status(404).json({
//         success: false,
//         statusCode: 404,
//         message: 'User not found',
//         data: null,
//       });
//     }
//     res.status(200).json({
//       success: true,
//       statusCode: 200,
//       message: 'User updated successfully',
//       data: updatedUser,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Delete a user
// export const deleteSingleUserController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const userId = req.params.id;
//   try {
//     const deletedUser = await deleteSingleUser(userId);
//     if (!deletedUser) {
//       return res.status(404).json({
//         success: false,
//         statusCode: 404,
//         message: 'User not found',
//         data: null,
//       });
//     }
//     res.status(200).json({
//       success: true,
//       statusCode: 200,
//       message: 'User deleted successfully',
//       data: deletedUser,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

import { NextFunction, Request, Response } from 'express';
import { IUser } from './user.interface'; // Update the path to your user.interface.ts file
import {
  createUser as createUserDb,
  deleteSingleUser as deleteSingleUserDb,
  getAllUsers as getAllUsersDb,
  getSingleUser as getSingleUserDb,
  updateSingleUser as updateSingleUserDb,
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