"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyerModel = void 0;
const mongoose_1 = require("mongoose");
const buyerSchema = new mongoose_1.Schema({
    password: { type: String, required: true },
    role: { type: String, enum: ['buyer'], required: true },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    budget: { type: Number, default: 0 },
    income: { type: Number, default: 0 },
}, { timestamps: true });
exports.BuyerModel = (0, mongoose_1.model)('Buyer', buyerSchema);
