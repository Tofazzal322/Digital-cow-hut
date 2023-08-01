// src/routes/userRoutes.ts

import express from 'express';
import {
  createUserController,
  getAllUsersController,
  getSingleUserController,
  updateSingleUserController,
  deleteSingleUserController,
} from '../user/';

const router = express.Router();

router.post('/', createUserController);
router.get('/', getAllUsersController);
router.get('/:id', getSingleUserController);
router.patch('/:id', updateSingleUserController);
router.delete('/:id', deleteSingleUserController);

export default router;
