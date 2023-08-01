// src/controllers/cowController.ts

import { Request, Response, NextFunction } from 'express';
import { CowModel } from './seller.model';


// Create a new cow
export const createCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCow = await CowModel.create(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Cow created successfully',
      data: newCow,
    });
  } catch (error) {
    next(error);
  }
};

// Get all cows
export const getAllCows = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cows = await CowModel.find();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Cows retrieved successfully',
      data: cows,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single cow
export const getSingleCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cowId = req.params.id;
  try {
    const cow = await CowModel.findById(cowId);
    if (!cow) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Cow not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Cow retrieved successfully',
      data: cow,
    });
  } catch (error) {
    next(error);
  }
};

// Update a single cow
export const updateSingleCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cowId = req.params.id;
  try {
    const updatedCow = await CowModel.findByIdAndUpdate(cowId, req.body, {
      new: true,
    });
    if (!updatedCow) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Cow not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Cow updated successfully',
      data: updatedCow,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a cow
export const deleteSingleCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cowId = req.params.id;
  try {
    const deletedCow = await CowModel.findByIdAndDelete(cowId);
    if (!deletedCow) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Cow not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Cow deleted successfully',
      data: deletedCow,
    });
  } catch (error) {
    next(error);
  }
};
