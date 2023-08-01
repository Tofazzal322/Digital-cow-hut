"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyerRoutes = exports.validateBuyerData = void 0;
const express_1 = require("express");
const buyer_controller_1 = require("../buyer/buyer.controller");
const buyer_validation_1 = require("./buyer.validation");
const router = (0, express_1.Router)();
const validateBuyerData = (req, res, next) => {
    try {
        const validatedData = buyer_validation_1.BuyerValidation.buyerValidationSchema.parse(req.body);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        req.validatedData = validatedData;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.validateBuyerData = validateBuyerData;
// router.post('/create-buyer', validateBuyerData, createBuyerController);
router.get('/get-allBuyer', buyer_controller_1.getAllBuyersController);
router.get('/:id', buyer_controller_1.getSingleBuyerController);
router.patch('/:id', exports.validateBuyerData, buyer_controller_1.updateSingleBuyerController);
router.delete('/:id', buyer_controller_1.deleteSingleBuyerController);
exports.buyerRoutes = router;
