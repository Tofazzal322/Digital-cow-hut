// src/routes/cowRoutes.ts

// import express from 'express';
// import {
//   createCow,
//   getAllCows,
//   getSingleCow,
//   updateSingleCow,
//   deleteSingleCow,
// } from '../cow/cow.controller';

// const router = express.Router();

// router.post('/', createCow);
// router.get('/', getAllCows);
// router.get('/:id', getSingleCow);
// router.patch('/:id', updateSingleCow);
// router.delete('/:id', deleteSingleCow);

// export default router;

import express from 'express';
import { createCowController, getAllCowsController, getSingleCowController, updateSingleCowController } from './cow.controller';


const router = express.Router();

router.post('/', createCowController);
router.get('/', getAllCowsController);
router.get('/:id', getSingleCowController);
router.patch('/:id', updateSingleCowController);
router.delete('/:id', deleteSingleCow);

export default router;