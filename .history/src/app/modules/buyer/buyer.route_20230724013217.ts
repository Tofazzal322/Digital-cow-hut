import { Router } from 'express';
import {
  createBuyerController,
  getAllBuyersController,
  getSingleBuyerController,
  updateSingleBuyerController,
  deleteSingleBuyerController,
} from '../buyer/buyer.controller';
import { BuyerValidation } from './buyer.validation';


const router = Router();

router.post(
  '/',
  createBuyerController
);
router.get('/', getAllBuyersController);
router.get('/:id', getSingleBuyerController);
router.patch(
  '/:id',

  updateSingleBuyerController
);
router.delete('/:id', deleteSingleBuyerController);

export default router;
