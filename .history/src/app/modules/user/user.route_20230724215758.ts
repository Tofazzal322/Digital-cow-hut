// src/routes/userRoutes.ts

// import express from 'express';
// import {
//   createUserController,
//   getAllUsersController,
//   getSingleUserController,
//   updateSingleUserController,
//   deleteSingleUserController,
// } from '../user/user.controller';

// const router = express.Router();

// router.post('/', createUserController);
// router.get('/', getAllUsersController);
// router.get('/:id', getSingleUserController);
// router.patch('/:id', updateSingleUserController);
// router.delete('/:id', deleteSingleUserController);

// export default router;


import express from 'express';
import {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
} from './user.controller';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getSingleUser);
router.put('/users/:id', updateSingleUser);
router.delete('/users/:id', deleteSingleUser);

export default router;
