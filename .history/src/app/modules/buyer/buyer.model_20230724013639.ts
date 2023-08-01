// src/models/buyer.model.ts

// import { Schema, model } from 'mongoose';
// import { IBuyer } from './buyer.interface';

// const buyerSchema = new Schema<IBuyer>(
//   {
//     password: { type: String, required: true },
//     role: { type: String, required: true },
//     name: {
//       firstName: { type: String, required: true },
//       lastName: { type: String, required: true },
//     },
//     phoneNumber: { type: String, required: true },
//     address: { type: String, required: true },
//     budget: { type: Number, default: 0 },
//     income: { type: Number, default: 0 },
//   },
//   { timestamps: true }
// );

// export const BuyerModel = model<IBuyer>('Buyer', buyerSchema);
// export { IBuyer };

import { Schema, model } from 'mongoose';
import { IBuyer } from './buyer.interface';

const buyerSchema = new Schema<IBuyer>(
  {
    password: { type: String, required: true },
    role: { type: String, enum: ['buyer'], required: true },
    name: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    budget: { type: Number, default: 0 },
    income: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const BuyerModel = model<IBuyer>('Buyer', buyerSchema);
