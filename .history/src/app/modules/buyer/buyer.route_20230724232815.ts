import { NextFunction, Request, Response, Router } from 'express';
import {
  createBuyerController,
  deleteSingleBuyerController,
  getAllBuyersController,
  getSingleBuyerController,
  updateSingleBuyerController,
} from '../buyer/buyer.controller';
import { BuyerValidation } from './buyer.validation';

const router = Router();
const validateBuyerData = (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedData = BuyerValidation.buyerValidationSchema.parse(req.body);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (req as any).validatedData = validatedData; // Type assertion to add the 'validatedData' property
    next();
  } catch (error) {
    next(error);
  }
};

router.post('/create-buyer', validateBuyerData, createBuyerController);
router.get('/get-buyer', getAllBuyersController);
router.get('/:id', getSingleBuyerController);
router.patch('/:id', validateBuyerData, updateSingleBuyerController);
router.delete('/:id', deleteSingleBuyerController);

export const buyerRoutes= router;
