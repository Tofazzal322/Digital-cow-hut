// src/routes/sellerRoutes.ts

import express from 'express';
import {
  createSeller,
  getAllSellers,
  getSingleSeller,
  updateSingleSeller,
  deleteSingleSeller,
} from '../seller/seller';

const router = express.Router();

router.post('/', createSeller);
router.get('/', getAllSellers);
router.get('/:id', getSingleSeller);
router.patch('/:id', updateSingleSeller);
router.delete('/:id', deleteSingleSeller);

export default router;
