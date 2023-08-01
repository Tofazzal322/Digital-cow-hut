// src/routes/index.ts

import express from 'express';
import userRoutes from '../modules/user/user.route';
import cowRoutes from '../modules/cow/cow.route';
import sellerRoutes from '../modules/seller/seller.route';
import { createBuyerController } from '../modules/buyer/buyer.controller';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/admin',
    route: adminRoutes,
  },
  {
    path: '/cows',
    route: cowRoutes,
  },
  {
    path: '/sellers', 
    route: sellerRoutes, 
  },
  {
    path: '/buyer', 
    route: createBuyerController, 
  },

];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
