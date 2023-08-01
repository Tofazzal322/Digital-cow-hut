"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowValidation = void 0;
const zod_1 = require("zod");
const cow_1 = require("../../../enums/cow");
const cowValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.object({
            firstName: zod_1.z.string().optional(),
            lastName: zod_1.z.string().optional(),
        }),
        age: zod_1.z.number().positive().int().optional(),
        price: zod_1.z.number().positive().optional(),
        location: zod_1.z.nativeEnum(cow_1.CowLocation).optional(),
        breed: zod_1.z.nativeEnum(cow_1.CowBreed).optional(),
        weight: zod_1.z.number().positive().optional(),
        label: zod_1.z.nativeEnum(cow_1.CowLabel).optional(),
        category: zod_1.z.nativeEnum(cow_1.CowCategory).optional(),
        seller: zod_1.z.string().optional(),
    }),
});
exports.CowValidation = {
    cowValidationSchema,
};
