// src/routes/cowRoutes.ts

import express from 'express';
import {
  createCow,
  getAllCows,
  getSingleCow,
  updateSingleCow,
  deleteSingleCow,
} from '..';

const router = express.Router();

router.post('/', createCow);
router.get('/', getAllCows);
router.get('/:id', getSingleCow);
router.patch('/:id', updateSingleCow);
router.delete('/:id', deleteSingleCow);

export default router;
