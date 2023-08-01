/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response, NextFunction } from 'express';
// import { ISeller } from '../seller/seller.interface';
import {
  createSeller,
  getAllSellers,
  getSingleSeller,
  updateSingleSeller,
} from '../seller/seller.service';
import { sellerValidationSchema } from './seller.validation';


// export const createSellerController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const newSellerData: Partial<ISeller> = {
//       password: req.body.password,
//       role: req.body.role,
//       name: {
//         firstName: req.body.name?.firstName,
//         lastName: req.body.name?.lastName,
//       },
//       phoneNumber: req.body.phoneNumber,
//       address: req.body.address,
//       budget: req.body.budget || 0,
//       income: req.body.income || 0,
//     };

//     const newSeller = await createSeller(newSellerData);
//     res.status(201).json({
//       success: true,
//       statusCode: 201,
//       message: 'Seller created successfully',
//       data: newSeller,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

export const createSellerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sellerData = sellerValidationSchema.parse(req.body.body);

    const newSeller = await createSeller(sellerData);
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


