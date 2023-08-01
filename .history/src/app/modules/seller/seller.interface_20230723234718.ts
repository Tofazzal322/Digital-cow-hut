// src/models/seller.interface.ts

import { Document } from 'mongoose';

export type ISeller = {
  name: string;
  phoneNumber: string;
  address: string;
  // Add other properties specific to sellers
  createdAt: Date;
  updatedAt: Date;
} & Document
