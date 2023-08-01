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
exports.deleteSingleUser = exports.updateSingleUser = exports.getSingleUser = exports.getAllUsers = exports.createUser = void 0;
const user_service_1 = require("./user.service");
// Create User
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const newUser = yield (0, user_service_1.createUser)(userData);
        res.status(201).json(newUser);
    }
    catch (err) {
        next(err);
    }
});
exports.createUser = createUser;
// Get all Users
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, user_service_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (err) {
        next(err);
    }
});
exports.getAllUsers = getAllUsers;
// Get Single User
const getSingleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield (0, user_service_1.getSingleUser)(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }
        else {
            res.status(200).json(user);
        }
    }
    catch (err) {
        next(err);
    }
});
exports.getSingleUser = getSingleUser;
// Update Single User
const updateSingleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = yield (0, user_service_1.updateSingleUser)(userId, userData);
        if (!updatedUser) {
            res.status(404).json({ message: 'User not found' });
        }
        else {
            res.status(200).json(updatedUser);
        }
    }
    catch (err) {
        next(err);
    }
});
exports.updateSingleUser = updateSingleUser;
// Delete Single User
const deleteSingleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const deletedUser = yield (0, user_service_1.deleteSingleUser)(userId);
        if (!deletedUser) {
            res.status(404).json({ message: 'User not found' });
        }
        else {
            res.status(200).json(deletedUser);
        }
    }
    catch (err) {
        next(err);
    }
});
exports.deleteSingleUser = deleteSingleUser;
