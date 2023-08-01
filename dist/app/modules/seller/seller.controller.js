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
exports.updateSingleSellerController = exports.getSingleSellerController = exports.getAllSellersController = exports.createSellerController = void 0;
// import { ISeller } from '../seller/seller.interface';
const seller_service_1 = require("../seller/seller.service");
const seller_validation_1 = require("./seller.validation");
const user_service_1 = require("../user/user.service");
// export const createSellerController = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const newSellerData: Partial<ISeller> = {
//       password: req.body.password,
//       role: req.body.role,
//       name: {
//         firstName: req.body.name?.firstName,
//         lastName: req.body.name?.lastName,
//       },
//       phoneNumber: req.body.phoneNumber,
//       address: req.body.address,
//       budget: req.body.budget || 0,
//       income: req.body.income || 0,
//     };
//     const newSeller = await createSeller(newSellerData);
//     res.status(201).json({
//       success: true,
//       statusCode: 201,
//       message: 'Seller created successfully',
//       data: newSeller,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
const createSellerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellerData = seller_validation_1.sellerValidationSchema.parse(req.body.body);
        const newSeller = yield (0, user_service_1.createSeller)(sellerData);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Seller created successfully',
            data: newSeller,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createSellerController = createSellerController;
// Get all sellers
const getAllSellersController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellers = yield (0, seller_service_1.getAllSellers)();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'All sellers retrieved successfully',
            data: sellers,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllSellersController = getAllSellersController;
// Get a single seller by ID
const getSingleSellerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const sellerId = req.params.id;
    try {
        const seller = yield (0, seller_service_1.getSingleSeller)(sellerId);
        if (!seller) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: 'Seller not found',
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Seller retrieved successfully',
            data: seller,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getSingleSellerController = getSingleSellerController;
// Update a single seller by ID
const updateSingleSellerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const sellerId = req.params.id;
    try {
        const updatedSeller = yield (0, seller_service_1.updateSingleSeller)(sellerId, req.body);
        if (!updatedSeller) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: 'Seller not found',
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Seller updated successfully',
            data: updatedSeller,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateSingleSellerController = updateSingleSellerController;
