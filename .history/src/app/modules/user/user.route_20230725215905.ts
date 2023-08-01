import express, { NextFunction } from 'express';
import {
  createUser,
  deleteSingleUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
} from './user.controller';
import { createSellerController } from '../seller/seller.controller';
import { createCowController } from '../cow/cow.controller';
import { createBuyerController } from '../buyer/buyer.controller';

// eslint-disable-next-line no-undef
const validateBuyerData = (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedData = BuyerValidation.buyerValidationSchema.parse(req.body);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (req as any).validatedData = validatedData;
    next();
  } catch (error) {
    next(error);
  }
};

const router = express.Router();

router.post('/create-users', createUser);
router.post('/create-buyer', validateBuyerData, createBuyerController);
router.post('/create-seller', createSellerController);
router.post('/create-cow', createCowController);
router.get('/getAll-users', getAllUsers);
router.get('/users/:id', getSingleUser);
router.put('/users/:id', updateSingleUser);
router.delete('/users/:id', deleteSingleUser);

export default router;
