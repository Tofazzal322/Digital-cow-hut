
// src/controllers/buyerController.ts

import { Request, Response, NextFunction } from 'express';
import { IBuyer } from '../models/buyer.interface';
import {
  createBuyer,
  getAllBuyers,
  getSingleBuyer,
  updateSingleBuyer,
  deleteSingleBuyer,
} from '../services/buyerServices';

// Create a new buyer
export const createBuyerController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newBuyer = await createBuyer(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Buyer created successfully',
      data: newBuyer,
    });
  } catch (error) {
    next(error);
  }
};

// Get all buyers
export const getAllBuyersController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const buyers = await getAllBuyers();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'All buyers retrieved successfully',
      data: buyers,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single buyer by ID
export const getSingleBuyerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const buyerId = req.params.id;
  try {
    const buyer = await getSingleBuyer(buyerId);
    if (!buyer) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Buyer not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Buyer retrieved successfully',
      data: buyer,
    });
  } catch (error) {
    next(error);
  }
};

// Update a single buyer by ID
export const updateSingleBuyerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const buyerId = req.params.id;
  try {
    const updatedBuyer = await updateSingleBuyer(buyerId, req.body);
    if (!updatedBuyer) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Buyer not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Buyer updated successfully',
      data: updatedBuyer,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a buyer (You can implement this in a similar way as getSingleBuyerController)
export const deleteSingleBuyerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Implement the logic to delete a single buyer by ID
};
