/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// cow.controller.ts

import { NextFunction, Request, Response } from 'express';
import { CowValidation } from './cow.validation';
import { ICow } from './cow.interface';
import CowServices from './cow.service';


// Create a new cow
export const createCowController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedData = CowValidation.cowValidationSchema.parse(req.body);

    // Create a new cow with the validated data
    const newCowData: ICow = {
      body :{
        name: {
        firstName: validatedData.body.name?.firstName || '',
        lastName: validatedData.body.name?.lastName || '',
      },
      age: validatedData.body.age || 0,
      price: validatedData.body.price || 0,
      location: validatedData.body.location || '',
      breed: validatedData.body.breed || '',
      weight: validatedData.body.weight || 0,
      label: validatedData.body.label || 'for sale',
      category: validatedData.body.category || '',
      seller: validatedData.body.seller || '', // Assuming seller reference ID is a string
      }
    };

    const newCow = await CowServices.createCow(newCowData.bo);
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
export const getAllCowsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cows = await CowServices.getAllCows();
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
export const getSingleCowController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cowId = req.params.id;
  try {
    const cow = await CowServices.getSingleCow(cowId);
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
export const updateSingleCowController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cowId = req.params.id;
  try {
    const updatedCow = await CowServices.updateSingleCow(cowId, req.body);
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
export const deleteSingleCowController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const cowId = req.params.id;
  try {
    const deletedCow = await CowServices.deleteSingleCow(cowId);
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
