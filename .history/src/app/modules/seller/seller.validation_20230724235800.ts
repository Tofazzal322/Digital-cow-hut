import { z } from 'zod';
import { ENUM_USER_ROLE } from '../../../enums/user'; // Import ENUM_USER_ROLE if you haven't already

export const sellerValidationSchema = z.object({
  password: z.string().min(6).max(30).required(),
  role: z.nativeEnum(ENUM_USER_ROLE).required(),
  name: z.object({
    firstName: z.string().min(2).max(50).required(),
    lastName: z.string().min(2).max(50).required(),
  }),
  phoneNumber: z.string().min(10).max(15).required(),
  address: z.string().min(5).max(100).required(),
  budget: z.number().min(0).default(0),
  income: z.number().min(0).default(0),
});
