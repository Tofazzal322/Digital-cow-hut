// import { Schema, model } from 'mongoose';
// import { ISeller } from '../seller/seller.interface';

// const sellerSchema = new Schema<ISeller>(
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

// export const SellerModel = model<ISeller>('Seller', sellerSchema);
// export { ISeller };

import { z } from 'zod';
import { ENUM_USER_ROLE } from '../../../enums/user'; // Import ENUM_USER_ROLE if you haven't already

export const sellerValidationSchema = z.object({
  password: z.string().min(6).max(30).op(),
  role: z.nativeEnum(ENUM_USER_ROLE).op(),
  name: z.object({
    firstName: z.string().min(2).max(50).op(),
    lastName: z.string().min(2).max(50).op(),
  }),
  phoneNumber: z.string().min(10).max(15).op(),
  address: z.string().min(5).max(100).op(),
  budget: z.number().min(0).default(0),
  income: z.number().min(0).default(0),
});