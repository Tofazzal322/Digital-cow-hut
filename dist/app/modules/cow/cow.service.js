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
exports.deleteSingleCow = exports.updateSingleCow = exports.getSingleCow = exports.getAllCows = void 0;
/* eslint-disable no-useless-catch */
const cow_model_1 = require("./cow.model");
// Create a new cow
// export const createCow = async (cowData: Partial<ICow>): Promise<ICow> => {
//   try {
//     const newCow = await CowModel.create(cowData);
//     return newCow;
//   } catch (error) {
//     throw error;
//   }
// };
// Get all cows
const getAllCows = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cows = yield cow_model_1.CowModel.find();
        return cows;
    }
    catch (error) {
        throw error;
    }
});
exports.getAllCows = getAllCows;
// Get a single cow by ID
const getSingleCow = (cowId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cow = yield cow_model_1.CowModel.findById(cowId);
        return cow;
    }
    catch (error) {
        throw error;
    }
});
exports.getSingleCow = getSingleCow;
// Update a single cow by ID
const updateSingleCow = (cowId, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCow = yield cow_model_1.CowModel.findByIdAndUpdate(cowId, updateData, {
            new: true,
        });
        return updatedCow;
    }
    catch (error) {
        throw error;
    }
});
exports.updateSingleCow = updateSingleCow;
// Delete a single cow by ID
const deleteSingleCow = (cowId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCow = yield cow_model_1.CowModel.findByIdAndDelete(cowId);
        return deletedCow;
    }
    catch (error) {
        throw error;
    }
});
exports.deleteSingleCow = deleteSingleCow;
const CowServices = {
    // createCow,
    getAllCows: exports.getAllCows,
    getSingleCow: exports.getSingleCow,
    updateSingleCow: exports.updateSingleCow,
    deleteSingleCow: exports.deleteSingleCow,
};
exports.default = CowServices;
