import express from 'express';
import {
  createOrder,
  deleteOrder,
  getUserOrder,
  updateOrder,
  getAllOrders,
  getMonthlyIncome,
} from '../controller/orderController.js';
const router = express.Router();
import {
  verifyToken,
  verifyTokenAuthorization,
  verifyTokenIsAdmin,
} from '../middleware/authMiddleware.js';

router.route('/').post(verifyToken, createOrder);
router.route('/find/:id').put(verifyTokenIsAdmin, updateOrder);
router.route('/find/:id').delete(verifyTokenIsAdmin, deleteOrder);
router.route('/find/:userId').get(verifyTokenAuthorization, getUserOrder);
router.route('/').get(verifyTokenIsAdmin, getAllOrders);
router.route('/income').get(verifyTokenIsAdmin, getMonthlyIncome);

export default router;
