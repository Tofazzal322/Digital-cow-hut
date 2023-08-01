"use strict";
/* eslint-disable no-useless-catch */
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
exports.deleteSingleUser = exports.updateSingleUser = exports.getSingleUser = exports.getAllUsers = exports.createUser = exports.createBuyer = exports.createCow = exports.createSeller = void 0;
const user_model_1 = require("./user.model");
const seller_model_1 = require("../seller/seller.model");
const cow_model_1 = require("../cow/cow.model");
const buyer_model_1 = require("../buyer/buyer.model");
//  Create Sellers
const createSeller = (sellerData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newSeller = yield seller_model_1.SellerModel.create(sellerData);
        return newSeller;
    }
    catch (error) {
        throw Error;
    }
});
exports.createSeller = createSeller;
//  Create Cows 
const createCow = (cowData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCow = yield cow_model_1.CowModel.create(cowData);
        return newCow;
    }
    catch (error) {
        throw error;
    }
});
exports.createCow = createCow;
// Create Buyers 
const createBuyer = (buyerData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBuyer = yield buyer_model_1.BuyerModel.create(buyerData);
        return newBuyer;
    }
    catch (error) {
        throw error;
    }
});
exports.createBuyer = createBuyer;
//  Create Users
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield user_model_1.UserModel.create(userData);
    return newUser;
});
exports.createUser = createUser;
//  Get All Users
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.UserModel.find();
    return users;
});
exports.getAllUsers = getAllUsers;
const getSingleUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.UserModel.findById(userId);
    return user;
});
exports.getSingleUser = getSingleUser;
const updateSingleUser = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield user_model_1.UserModel.findByIdAndUpdate(userId, userData, {
        new: true,
    });
    return updatedUser;
});
exports.updateSingleUser = updateSingleUser;
const deleteSingleUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield user_model_1.UserModel.findByIdAndDelete(userId);
    return deletedUser;
});
exports.deleteSingleUser = deleteSingleUser;
