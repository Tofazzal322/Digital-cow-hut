import express from 'express';
import { createCowController, deleteSingleCowController, getAllCowsController, getSingleCowController, updateSingleCowController } from './cow.controller';


const router = express.Router();

router.post('/', createCowController);
router.get('/', getAllCowsController);
router.get('/:id', getSingleCowController);
router.patch('/:id', updateSingleCowController);
router.delete('/:id', deleteSingleCowController);

export default router;