import { z } from 'zod';
import { ENUM_USER_ROLE } from '../../../enums/user';

const buyerValidationSchema = z.object({
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
