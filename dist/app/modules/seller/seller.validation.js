"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellerValidationSchema = void 0;
const zod_1 = require("zod");
const user_1 = require("../../../enums/user"); // Import ENUM_USER_ROLE if you haven't already
exports.sellerValidationSchema = zod_1.z.object({
    password: zod_1.z.string().min(6).max(30).optional(),
    role: zod_1.z.nativeEnum(user_1.ENUM_USER_ROLE).optional(),
    name: zod_1.z.object({
        firstName: zod_1.z.string().min(2).max(50).optional(),
        lastName: zod_1.z.string().min(2).max(50).optional(),
    }),
    phoneNumber: zod_1.z.string().min(10).max(15).optional(),
    address: zod_1.z.string().min(5).max(100).optional(),
    budget: zod_1.z.number().min(0).default(0),
    income: zod_1.z.number().min(0).default(0),
});
