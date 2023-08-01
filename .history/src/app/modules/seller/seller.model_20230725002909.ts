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

// import { z } from 'zod';
// import { ENUM_USER_ROLE } from '../../../enums/user'; // Import ENUM_USER_ROLE if you haven't already
// import { ISeller } from './seller.interface';
// import { model } from 'mongoose';

// export const sellerValidationSchema = z.object({
//   password: z.string().min(6).max(30).optional(),
//   role: z.nativeEnum(ENUM_USER_ROLE).optional(),
//   name: z.object({
//     firstName: z.string().min(2).max(50).optional(),
//     lastName: z.string().min(2).max(50).optional(),
//   }),
//   phoneNumber: z.string().min(10).max(15).optional(),
//   address: z.string().min(5).max(100).optional(),
//   budget: z.number().min(0).default(0),
//   income: z.number().min(0).default(0),
// });

// export const SellerModel = model<ISeller>('Seller', sellerSchema);