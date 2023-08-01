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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSingleCowController = exports.updateSingleCowController = exports.getSingleCowController = exports.getAllCowsController = exports.createCowController = void 0;
const cow_validation_1 = require("./cow.validation");
const cow_service_1 = __importDefault(require("./cow.service"));
const cow_1 = require("../../../enums/cow");
const user_service_1 = require("../user/user.service");
// Create a new cow
const createCowController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const validatedData = cow_validation_1.CowValidation.cowValidationSchema.parse(req.body);
        // Create a new cow with the validated data
        const newCowData = {
            name: {
                firstName: ((_a = validatedData.body.name) === null || _a === void 0 ? void 0 : _a.firstName) || '',
                lastName: ((_b = validatedData.body.name) === null || _b === void 0 ? void 0 : _b.lastName) || '',
            },
            age: validatedData.body.age || 0,
            price: validatedData.body.price || 0,
            location: validatedData.body.location || cow_1.CowLocation.Dhaka,
            breed: validatedData.body.breed || cow_1.CowBreed.Brahman,
            weight: validatedData.body.weight || 0,
            label: validatedData.body.label || cow_1.CowLabel.ForSale,
            category: validatedData.body.category || cow_1.CowCategory.Dairy,
            seller: validatedData.body.seller || '',
        };
        // const newCow = await CowServices.createCow(newCowData);
        const newCow = yield (0, user_service_1.createCow)(newCowData);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Cow created successfully',
            data: newCow,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createCowController = createCowController;
// Get all cows
const getAllCowsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cows = yield cow_service_1.default.getAllCows();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Cows retrieved successfully',
            data: cows,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllCowsController = getAllCowsController;
// Get a single cow
const getSingleCowController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cowId = req.params.id;
    try {
        const cow = yield cow_service_1.default.getSingleCow(cowId);
        if (!cow) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: 'Cow not found',
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Cow retrieved successfully',
            data: cow,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getSingleCowController = getSingleCowController;
// Update a single cow
const updateSingleCowController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cowId = req.params.id;
    try {
        const updatedCow = yield cow_service_1.default.updateSingleCow(cowId, req.body);
        if (!updatedCow) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: 'Cow not found',
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Cow updated successfully',
            data: updatedCow,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateSingleCowController = updateSingleCowController;
// Delete a cow
const deleteSingleCowController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cowId = req.params.id;
    try {
        const deletedCow = yield cow_service_1.default.deleteSingleCow(cowId);
        if (!deletedCow) {
            return res.status(404).json({
                success: false,
                statusCode: 404,
                message: 'Cow not found',
                data: null,
            });
        }
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Cow deleted successfully',
            data: deletedCow,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteSingleCowController = deleteSingleCowController;
