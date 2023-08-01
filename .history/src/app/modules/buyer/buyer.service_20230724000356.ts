/* eslint-disable no-useless-catch */
// src/services/buyerServices.ts

import { BuyerModel, IBuyer } from '../models/buyer.model';

// Get a single buyer by ID
export const getSingleBuyer = async (
  buyerId: string
): Promise<IBuyer | null> => {
  try {
    const buyer = await BuyerModel.findById(buyerId);
    return buyer;
  } catch (error) {
    throw error;
  }
};

// Get all buyers
export const getAllBuyers = async (): Promise<IBuyer[]> => {
  try {
    const buyers = await BuyerModel.find();
    return buyers;
  } catch (error) {
    throw error;
  }
};

// Create a new buyer
export const createBuyer = async (
  buyerData: Partial<IBuyer>
): Promise<IBuyer> => {
  try {
    const newBuyer = await BuyerModel.create(buyerData);
    return newBuyer;
  } catch (error) {
    throw error;
  }
};

// Update a single buyer
export const updateSingleBuyer = async (
  buyerId: string,
  buyerData: Partial<IBuyer>
): Promise<IBuyer | null> => {
  try {
    const updatedBuyer = await BuyerModel.findByIdAndUpdate(
      buyerId,
      buyerData,
      {
        new: true,
      }
    );
    return updatedBuyer;
  } catch (error) {
    throw error;
  }
};
