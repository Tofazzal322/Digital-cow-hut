
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
