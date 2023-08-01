import express from 'express';
import {
  createUser,
  deleteSingleUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
} from './user.controller';

const router = express.Router();

router.post('/create-users', createUser);
router.post('/create-users', createUser);
router.get('/getAll-users', getAllUsers);
router.get('/users/:id', getSingleUser);
router.put('/users/:id', updateSingleUser);
router.delete('/users/:id', deleteSingleUser);

export default router;
