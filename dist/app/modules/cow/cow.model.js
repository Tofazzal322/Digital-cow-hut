"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowModel = void 0;
const mongoose_1 = require("mongoose");
const cow_1 = require("../../../enums/cow");
const cowSchema = new mongoose_1.Schema({
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    age: { type: Number, required: true },
    price: { type: Number, required: true },
    location: {
        type: String,
        enum: Object.values(cow_1.CowLocation),
        required: true,
    },
    breed: { type: String, enum: Object.values(cow_1.CowBreed), required: true },
    weight: { type: Number, required: true },
    label: {
        type: String,
        enum: Object.values(cow_1.CowLabel),
        default: cow_1.CowLabel.ForSale,
    },
    category: {
        type: String,
        enum: Object.values(cow_1.CowCategory),
        required: true,
    },
}, { timestamps: true });
exports.CowModel = (0, mongoose_1.model)('Cow', cowSchema);
