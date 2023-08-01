"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const seller_controller_1 = require("../seller/seller.controller");
const router = express_1.default.Router();
// router.post('/create-seller', createSellerController);
router.get('/get-allSeller', seller_controller_1.getAllSellersController);
router.get('/:id', seller_controller_1.getSingleSellerController);
router.patch('/:id', seller_controller_1.updateSingleSellerController);
exports.default = router;
