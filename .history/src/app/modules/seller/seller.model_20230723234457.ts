// src/models/seller.model.ts

import { Schema, model } from 'mongoose';
import { ISeller } from './seller.interface';

const sellerSchema = new Schema<ISeller>(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    // Add other properties specific to sellers
  },
  { timestamps: true }
);

export const SellerModel = model<ISeller>('Seller', sellerSchema);
