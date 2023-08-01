"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSingleBuyer = exports.updateSingleBuyer = exports.getAllBuyers = exports.getSingleBuyer = void 0;
/* eslint-disable no-useless-catch */
const buyer_model_1 = require("../buyer/buyer.model");
// Get a single buyer by ID
const getSingleBuyer = (buyerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const buyer = yield buyer_model_1.BuyerModel.findById(buyerId);
        return buyer;
    }
    catch (error) {
        throw error;
    }
});
exports.getSingleBuyer = getSingleBuyer;
// Get all buyers
const getAllBuyers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const buyers = yield buyer_model_1.BuyerModel.find();
        return buyers;
    }
    catch (error) {
        throw error;
    }
});
exports.getAllBuyers = getAllBuyers;
// Create a new buyer
// export const createBuyer = async (
//   buyerData: Partial<IBuyer>
// ): Promise<IBuyer> => {
//   try {
//     const newBuyer = await BuyerModel.create(buyerData);
//     return newBuyer;
//   } catch (error) {
//     throw error;
//   }
// };
// Update a single buyer
const updateSingleBuyer = (buyerId, buyerData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBuyer = yield buyer_model_1.BuyerModel.findByIdAndUpdate(buyerId, buyerData, {
            new: true,
        });
        return updatedBuyer;
    }
    catch (error) {
        throw error;
    }
});
exports.updateSingleBuyer = updateSingleBuyer;
const deleteSingleBuyer = (buyerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedBuyer = yield buyer_model_1.BuyerModel.findByIdAndDelete(buyerId);
        return deletedBuyer;
    }
    catch (error) {
        throw error;
    }
});
exports.deleteSingleBuyer = deleteSingleBuyer;
