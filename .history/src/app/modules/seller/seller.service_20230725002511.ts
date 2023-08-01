/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { z } from 'zod';
// import { SellerModel, ISeller } from '../seller/seller.model';
import { sellerValidationSchema } from './seller.validation';
import { ISeller } from './seller.interface';

// Get a single seller by ID
export const getSingleSeller = async (sellerId: string): Promise<ISeller | null> => {
  try {
    const seller = await SellerModel.findById(sellerId);
    return seller;
  } catch (error) {
    throw error;
  }
};

// Get all sellers
export const getAllSellers = async (): Promise<ISeller[]> => {
  try {
    const sellers = await sellerValidationSchema.z.find();
    return sellers;
  } catch (error) {
    throw error;
  }
};


export const createSeller = async (
  sellerData: z.infer<typeof sellerValidationSchema>
): Promise<ISeller> => {
  try {
    const newSeller = await SellerModel.create(sellerData);
    return newSeller;
  } catch (error) {
    throw error;
  }
};

// Update a single seller
export const updateSingleSeller = async (
  sellerId: string,
  sellerData: Partial<ISeller>
): Promise<ISeller | null> => {
  try {
    const updatedSeller = await SellerModel.findByIdAndUpdate(sellerId, sellerData, {
      new: true,
    });
    return updatedSeller;
  } catch (error) {
    throw error;
  }
};
