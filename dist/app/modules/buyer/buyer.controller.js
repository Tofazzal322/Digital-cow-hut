"use strict";
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
exports.deleteSingleBuyerController = exports.updateSingleBuyerController = exports.getSingleBuyerController = exports.getAllBuyersController = exports.createBuyerController = void 0;
const buyer_service_1 = require("./buyer.service");
const buyer_validation_1 = require("./buyer.validation");
const user_service_1 = require("../user/user.service");
// Create a new buyer
const createBuyerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const validatedData = buyer_validation_1.BuyerValidation.buyerValidationSchema.parse(req.body);
        // Create a new buyer with the validated data
        const newBuyerData = {
            password: validatedData.body.password || '',
            role: validatedData.body.role || 'buyer',
            name: {
                firstName: ((_a = validatedData.body.name) === null || _a === void 0 ? void 0 : _a.firstName) || '',
                lastName: ((_b = validatedData.body.name) === null || _b === void 0 ? void 0 : _b.lastName) || '',
            },
            phoneNumber: validatedData.body.phoneNumber || '',
            address: validatedData.body.address || '',
            budget: validatedData.body.budget || 0,
            income: validatedData.body.income || 0,
        };
        const newBuyer = yield (0, user_service_1.createBuyer)(newBuyerData);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Buyer created successfully',
            data: newBuyer,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createBuyerController = createBuyerController;
// Get all buyers
const getAllBuyersController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const buyers = yield (0, buyer_service_1.getAllBuyers)();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'All buyers retrieved successfully',
            data: buyers,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllBuyersController = getAllBuyersController;
// Get a single buyer by ID
const getSingleBuyerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const buyerId = req.params.id;
    try {
        const buyer = yield (0, buyer_service_1.getSingleBuyer)(buyerId);
        if (!buyer) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: 'Buyer not found',
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Buyer retrieved successfully',
            data: buyer,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getSingleBuyerController = getSingleBuyerController;
// Update a single buyer by ID
const updateSingleBuyerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const buyerId = req.params.id;
    try {
        const validatedData = buyer_validation_1.BuyerValidation.buyerValidationSchema.parse(req.body);
        const updatedBuyerData = {
            password: validatedData.body.password || '',
            role: validatedData.body.role || 'buyer',
            name: {
                firstName: ((_c = validatedData.body.name) === null || _c === void 0 ? void 0 : _c.firstName) || '',
                lastName: ((_d = validatedData.body.name) === null || _d === void 0 ? void 0 : _d.lastName) || '',
            },
            phoneNumber: validatedData.body.phoneNumber || '',
            address: validatedData.body.address || '',
            budget: validatedData.body.budget || 0,
            income: validatedData.body.income || 0,
        };
        const updatedBuyer = yield (0, buyer_service_1.updateSingleBuyer)(buyerId, updatedBuyerData); // Use the BuyerServices.updateSingleBuyer function
        if (!updatedBuyer) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: 'Buyer not found',
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Buyer updated successfully',
            data: updatedBuyer,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateSingleBuyerController = updateSingleBuyerController;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// Delete a single buyer by ID
const deleteSingleBuyerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const buyerId = req.params.id;
    try {
        const deletedBuyer = yield (0, buyer_service_1.deleteSingleBuyer)(buyerId);
        if (!deletedBuyer) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: 'Buyer not found',
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Buyer deleted successfully',
            data: deletedBuyer,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteSingleBuyerController = deleteSingleBuyerController;
