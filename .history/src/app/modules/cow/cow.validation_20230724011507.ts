import { z } from 'zod';

const cowValidationSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
    }),

    age: z.number().positive().int().optional(),

    price: z.number().positive().optional(),

    location: z.object
      .optional(),

    breed: z
      .enum([
        'Brahman',
        'Nellore',
        'Sahiwal',
        'Gir',
        'Indigenous',
        'Tharparkar',
        'Kankrej',
      ])
      .optional(),

    weight: z.number().positive().optional(),

    label: z.enum(['for sale', 'sold out']).optional(),

    category: z.enum(['Dairy', 'Beef', 'Dual Purpose']).optional(),

    seller: z.string().optional(), // Assuming seller reference ID is a string
  }),
});

export const CowValidation = {
  cowValidationSchema,
};
