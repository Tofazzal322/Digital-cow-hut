/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/services/sellerServices.ts

import { SellerModel, ISeller } from '../seller/seller.model';

// Add seller services logic here
// src/services/sellerServices.ts

import { SellerModel, ISeller } from '..';

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
    const sellers = await SellerModel.find();
    return sellers;
  } catch (error) {
    throw error;
  }
};

// Create a new seller
export const createSeller = async (sellerData: Partial<ISeller>): Promise<ISeller> => {
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
