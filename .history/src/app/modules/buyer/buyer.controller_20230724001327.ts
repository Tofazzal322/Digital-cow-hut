/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response, NextFunction } from 'express';
import { IBuyer } from '../buyer/buyer.interface';
import {
  createBuyer,
  deleteSingleBuyer,
  getAllBuyers,
  getSingleBuyer,
  updateSingleBuyer,
} from '../buyer/buyer.service';

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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// Delete a single buyer by ID
export const deleteSingleBuyerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const buyerId = req.params.id;
  try {
    const deletedBuyer = await deleteSingleBuyer(buyerId);
    if (!deletedBuyer) {
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
      message: 'Buyer deleted successfully',
      data: deletedBuyer,
    });
  } catch (error) {
    next(error);
  }
};