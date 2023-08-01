import express from 'express';
import {
  createSellerController,
  getAllSellersController,
  getSingleSellerController,
  updateSingleSellerController,
} from '../seller/seller.controller';

const router = express.Router();

router.post('/create-seller', createSellerController);
router.get('/get-alleller', getAllSellersController);
router.get('/:id', getSingleSellerController);
router.patch('/:id', updateSingleSellerController);

export default router;
