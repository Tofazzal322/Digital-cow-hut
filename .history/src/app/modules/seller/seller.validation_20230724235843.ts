import { z } from 'zod';
import { ENUM_USER_ROLE } from '../../../enums/user'; // Import ENUM_USER_ROLE if you haven't already

export const sellerValidationSchema = z.object({
  password: z.string().min(6).max(30).optional(),
  role: z.nativeEnum(ENUM_USER_ROLE).optional(),
  name: z.object({
    firstName: z.string().min(2).max(50).optional(),
    lastName: z.string().min(2).max(50).optional(),
  }),
  phoneNumber: z.string().min(10).max(15).optional(),
  address: z.string().min(5).max(100).optional(),
  budget: z.number().min(0).default(0),
  income: z.number().min(0).default(0),
});
