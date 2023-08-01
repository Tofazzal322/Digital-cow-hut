// src/routes/sellerRoutes.ts

import express from 'express';
import {
  createSellerController,
  getAllSellersController,
  getSingleSellerController,
  updateSingleSellerController,
} from '../seller/seller.controller';

const router = express.Router();

router.post('/', createSellerController);
router.get('/', getAllSellersController);
router.get('/:id', getSingleSellerController);
router.patch('/:id', updateSingleSellerController);

export default router;
