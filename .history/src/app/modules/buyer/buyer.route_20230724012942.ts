import { Router } from 'express';
import {
  createBuyerController,
  getAllBuyersController,
  getSingleBuyerController,
  updateSingleBuyerController,
  deleteSingleBuyerController,
} from '../buyer/buyer.controller';


const router = Router();

router.post(
  '/',
  createBuyerValidationRules,
  buyerValidationMiddleware,
  createBuyerController
);
router.get('/', getAllBuyersController);
router.get('/:id', getSingleBuyerController);
router.patch(
  '/:id',
  updateBuyerValidationRules,
  buyerValidationMiddleware,
  updateSingleBuyerController
);
router.delete('/:id', deleteSingleBuyerController);

export default router;
