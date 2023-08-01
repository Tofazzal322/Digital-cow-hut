// src/models/buyer.model.ts

import { Schema, model } from 'mongoose';
import { IBuyer } from './buyer.interface';

const buyerSchema = new Schema<IBuyer>(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    // Add other properties specific to buyers
  },
  { timestamps: true }
);

export const BuyerModel = model<IBuyer>('Buyer', buyerSchema);
export { IBuyer };

