"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const seller_controller_1 = require("../seller/seller.controller");
const cow_controller_1 = require("../cow/cow.controller");
const buyer_controller_1 = require("../buyer/buyer.controller");
const buyer_route_1 = require("../buyer/buyer.route");
// eslint-disable-next-line no-undef
const router = express_1.default.Router();
router.post('/create-users', user_controller_1.createUser);
router.post('/create-buyer', buyer_route_1.validateBuyerData, buyer_controller_1.createBuyerController);
router.post('/create-seller', seller_controller_1.createSellerController);
router.post('/create-cow', cow_controller_1.createCowController);
router.get('/getAll-users', user_controller_1.getAllUsers);
router.get('/users/:id', user_controller_1.getSingleUser);
router.put('/users/:id', user_controller_1.updateSingleUser);
router.delete('/users/:id', user_controller_1.deleteSingleUser);
exports.default = router;
