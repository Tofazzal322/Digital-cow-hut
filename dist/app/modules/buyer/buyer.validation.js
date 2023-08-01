"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerValidation = void 0;
const zod_1 = require("zod");
const user_1 = require("../../../enums/user");
const buyerValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().min(6).optional(),
        role: zod_1.z.nativeEnum(user_1.ENUM_USER_ROLE).optional(),
        name: zod_1.z.object({
            firstName: zod_1.z.string().optional(),
            lastName: zod_1.z.string().optional(),
        }),
        phoneNumber: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        budget: zod_1.z.number().nonnegative().optional(),
        income: zod_1.z.number().nonnegative().optional(),
    }),
});
exports.BuyerValidation = {
    buyerValidationSchema,
};
