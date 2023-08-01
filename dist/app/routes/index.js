"use strict";
// src/routes/index.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("../modules/user/user.route"));
const cow_route_1 = __importDefault(require("../modules/cow/cow.route"));
const seller_route_1 = __importDefault(require("../modules/seller/seller.route"));
// import { createBuyerController } from '../modules/buyer/buyer.controller';
const admin_route_1 = require("../modules/admin/admin.route");
const buyer_route_1 = require("../modules/buyer/buyer.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.default,
    },
    {
        path: '/admins',
        route: admin_route_1.AdminRoutes,
    },
    {
        path: '/cows',
        route: cow_route_1.default,
    },
    {
        path: '/sellers',
        route: seller_route_1.default,
    },
    {
        path: '/buyers',
        route: buyer_route_1.buyerRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
