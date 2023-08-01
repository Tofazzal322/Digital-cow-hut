import { Router } from 'express';
import {
  createBuyerController,
  getAllBuyersController,
  getSingleBuyerController,
  updateSingleBuyerController,
  deleteSingleBuyerController,
} from '../buyer/buyer.controller';
import { BuyerValidation, buyerValidationSchema } from './buyer.validation';

const router = Router();

router.post('/', BuyerValidation.buyerValidationSchema, createBuyerController);
router.get('/', getAllBuyersController);
router.get('/:id', getSingleBuyerController);
router.patch(
  '/:id',
  BuyerValidation.buyerValidationSchema,
  updateSingleBuyerController
);
router.delete('/:id', deleteSingleBuyerController);

export default router;
