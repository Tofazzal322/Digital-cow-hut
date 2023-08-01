import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './cow.controller';
import { StudentValidaion } from './cow.validation';
const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.get('/', StudentController.getAllStudents);

router.delete('/:id', StudentController.deleteStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidaion.updateStudentZodSchema),
  StudentController.updateStudent
);

export const StudentRoutes = router;
