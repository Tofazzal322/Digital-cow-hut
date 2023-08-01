// src/routes/index.ts

import express from 'express';
import userRoutes from '../modules/cow/';
import cowRoutes from './cowRoutes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/cows',
    route: cowRoutes,
  },
  // Add more modules/routes here if needed
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
