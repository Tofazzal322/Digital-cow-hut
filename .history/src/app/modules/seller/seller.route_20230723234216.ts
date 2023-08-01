// src/routes/sellerRoutes.ts

import express from 'express';
import {
  createSellerController,
  getAllSellersController,
  getSingleSellerController,
  updateSingleSellerController,
  deleteSingleSellerController,
} from '../controllers/sellerController';

const router = express.Router();

router.post('/', createSellerController);
router.get('/', getAllSellersController);
router.get('/:id', getSingleSellerController);
router.patch('/:id', updateSingleSellerController);
router.delete('/:id', deleteSingleSellerController);

export default router;
