"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const user_1 = require("../../../enums/user");
// Create the userSchema
const userSchema = new mongoose_1.Schema({
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(user_1.ENUM_USER_ROLE), required: true },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    budget: { type: Number, default: 0 },
    income: { type: Number, default: 0 },
}, { timestamps: true });
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
