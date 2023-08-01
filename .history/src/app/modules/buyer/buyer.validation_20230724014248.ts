// /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// // src/validations/buyerValidation.ts

// import { Request, Response, NextFunction } from 'express';
// import { body, validationResult } from 'express-validator';

// // Buyer creation validation rules
// export const createBuyerValidationRules = [
//   body('name').trim().notEmpty().withMessage('Name is required'),
//   body('phoneNumber').trim().notEmpty().withMessage('Phone number is required'),
//   body('address').trim().notEmpty().withMessage('Address is required'),
//   // Add other validation rules specific to buyers
// ];

// // Buyer update validation rules
// export const updateBuyerValidationRules = [
//   body('name').optional().trim().notEmpty().withMessage('Name is required'),
//   body('phoneNumber')
//     .optional()
//     .trim()
//     .notEmpty()
//     .withMessage('Phone number is required'),
//   body('address')
//     .optional()
//     .trim()
//     .notEmpty()
//     .withMessage('Address is required'),
//   // Add other validation rules specific to buyers
// ];

// // Buyer validation middleware
// export const buyerValidationMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({
//       success: false,
//       statusCode: 400,
//       message: 'Validation error',
//       errors: errors.array(),
//     });
//   }
//   next();
// };

import { z } from 'zod';
import { ENUM_USER_ROLE } from '../../../enums/user';

export const buyerValidationSchema = z.object({
  body: z.object({
    password: z.string().min(6).optional(),
    role: z.nativeEnum(ENUM_USER_ROLE).optional(),
    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    }),
    phoneNumber: z.string().optional(),
    address: z.string().optional(),
    budget: z.number().nonnegative().optional(),
    income: z.number().nonnegative().optional(),
  }),
});

export const BuyerValidation = {
  buyerValidationSchema,
};
