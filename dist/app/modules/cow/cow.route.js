"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cow_controller_1 = require("./cow.controller");
const router = express_1.default.Router();
// router.post('/create-cow', createCowController);
router.get('/get-AllCow', cow_controller_1.getAllCowsController);
router.get('/:id', cow_controller_1.getSingleCowController);
router.patch('/:id', cow_controller_1.updateSingleCowController);
router.delete('/:id', cow_controller_1.deleteSingleCowController);
exports.default = router;
