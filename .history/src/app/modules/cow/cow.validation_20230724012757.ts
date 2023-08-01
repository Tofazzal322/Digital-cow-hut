import { z } from 'zod';
import {
  CowBreed,
  CowCategory,
  CowLabel,
  CowLocation,
} from '../../../enums/cow';

const cowValidationSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    }),

    age: z.number().positive().int().optional(),

    price: z.number().positive().optional(),

    location: z.nativeEnum(CowLocation).optional(),

    breed: z.nativeEnum(CowBreed).optional(),

    weight: z.number().positive().optional(),

    label: z.nativeEnum(CowLabel).optional(),

    category: z.nativeEnum(CowCategory).optional(),

    seller: z.string().optional(), 
  }),
});

export const CowValidation = {
  cowValidationSchema,
};
