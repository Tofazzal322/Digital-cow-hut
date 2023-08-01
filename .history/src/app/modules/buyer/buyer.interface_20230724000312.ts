// src/models/buyer.interface.ts

import { Document } from 'mongoose';

export interface IBuyer extends Document {
  name: string;
  phoneNumber: string;
  address: string;
  // Add other properties specific to buyers
  createdAt: Date;
  updatedAt: Date;
}
