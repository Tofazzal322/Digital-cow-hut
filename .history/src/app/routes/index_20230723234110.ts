// src/routes/index.ts

import express from 'express';
import userRoutes from '../modules/user/user.route';
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
  {
    path: '/sellers', // Add the path for sellers
    route: sellerRoutes, // Use the sellerRoutes
  },
  // Add more modules/routes here if needed
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
