// src/models/seller.interface.ts

import { Document } from 'mongoose';

export interface ISeller extends Document {
  name: string;
  phoneNumber: string;
  address: string;
  // Add other properties specific to sellers
  createdAt: Date;
  updatedAt: Date;
}
