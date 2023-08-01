// src/routes/sellerRoutes.ts

import express from 'express';
import {
  createSelle,
  getAllSeller,
  getSingleSelle,
  updateSingleSelle,
  deleteSingleSelle,
} from '../seller/seller';

const router = express.Router();

router.post('/', createSelle);
router.get('/', getAllSeller);
router.get('/:id', getSingleSelle);
router.patch('/:id', updateSingleSelle);
router.delete('/:id', deleteSingleSelle);

export default router;
