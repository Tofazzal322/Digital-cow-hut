// src/models/seller.interface.ts

import { Document } from 'mongoose';

export type ISeller = {
  password: string;
  role: string;
  name: {
    firstName: string;
    lastName: string;
  };
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
  createdAt: Date;
  updatedAt: Date;
} & Document;
