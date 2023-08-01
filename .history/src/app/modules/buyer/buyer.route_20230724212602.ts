import { Router, Request, Response, NextFunction } from 'express';
import {
  createBuyerController,
  deleteSingleBuyerController,
  getAllBuyersController,
  getSingleBuyerController,
  updateSingleBuyerController,
} from '../buyer/buyer.controller';
import { BuyerValidation } from './buyer.validation';

// Custom interface to extend the Request type
type ValidatedRequest = {
  validatedData: any; // You can replace 'any' with a more specific type if needed
} & Request

const router = Router();
const validateBuyerData = (
  req: ValidatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedData = BuyerValidation.buyerValidationSchema.parse(req.body);
    req.validatedData = validatedData; // Save the validated data in the request object
    next();
  } catch (error) {
    next(error);
  }
};

router.post('/', validateBuyerData, createBuyerController);
router.get('/', getAllBuyersController);
router.get('/:id', getSingleBuyerController);
router.patch('/:id', validateBuyerData, updateSingleBuyerController);
router.delete('/:id', deleteSingleBuyerController);

export default router;
