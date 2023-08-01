

import { Document } from 'mongoose';

export type IBuyer = {
  name: string;
  phoneNumber: string;
  address: string;
  // Add other properties specific to buyers
  createdAt: Date;
  updatedAt: Date;
} & Document
