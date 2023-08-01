"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
exports.updateSingleSeller = exports.getAllSellers = exports.getSingleSeller = void 0;
const seller_model_1 = require("../seller/seller.model");
// Get a single seller by ID
const getSingleSeller = (sellerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seller = yield seller_model_1.SellerModel.findById(sellerId);
        return seller;
    }
    catch (error) {
        throw error;
    }
});
exports.getSingleSeller = getSingleSeller;
// Get all sellers
const getAllSellers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellers = yield seller_model_1.SellerModel.find();
        return sellers;
    }
    catch (error) {
        throw error;
    }
});
exports.getAllSellers = getAllSellers;
// export const createSeller = async (
//   sellerData: z.infer<typeof sellerValidationSchema>
// ): Promise<ISeller> => {
//   try {
//     const newSeller = await SellerModel.create(sellerData);
//     return newSeller;
//   } catch (error) {
//     throw error;
//   }
// };
// Update a single seller
const updateSingleSeller = (sellerId, sellerData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedSeller = yield seller_model_1.SellerModel.findByIdAndUpdate(sellerId, sellerData, {
            new: true,
        });
        return updatedSeller;
    }
    catch (error) {
        throw error;
    }
});
exports.updateSingleSeller = updateSingleSeller;
