// src/routes/index.ts

import express from 'express';
import userRoutes from '../modules';
import cowRoutes from '../modules/cow/cow.route';

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
