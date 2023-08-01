// src/controllers/sellerController.ts

import { Request, Response, NextFunction } from 'express';
import { ISeller } from '../models/seller.interface';
import {
  createSeller,
  getAllSellers,
  getSingleSeller,
  updateSingleSeller,
  deleteSingleSeller,
} from '../seller';

// Create a new seller
export const createSellerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newSeller = await createSeller(req.body);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Seller created successfully',
      data: newSeller,
    });
  } catch (error) {
    next(error);
  }
};

// Get all sellers
export const getAllSellersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sellers = await getAllSellers();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'All sellers retrieved successfully',
      data: sellers,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single seller by ID
export const getSingleSellerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const sellerId = req.params.id;
  try {
    const seller = await getSingleSeller(sellerId);
    if (!seller) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Seller not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Seller retrieved successfully',
      data: seller,
    });
  } catch (error) {
    next(error);
  }
};

// Update a single seller by ID
export const updateSingleSellerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const sellerId = req.params.id;
  try {
    const updatedSeller = await updateSingleSeller(sellerId, req.body);
    if (!updatedSeller) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: 'Seller not found',
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Seller updated successfully',
      data: updatedSeller,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a seller (You can implement this in a similar way as getSingleSellerController)
export const deleteSingleSellerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Implement the logic to delete a single seller by ID
};
