import express from 'express';
const router = express.Router();
import {
  verifyToken,
  verifyTokenAuthorization,
  verifyTokenIsAdmin,
} from '../middleware/authMiddleware.js';
import {
  createCart,
  updateCart,
  deleteCart,
  getSingleCart,
  getAllCarts,
} from '../controller/cartController.js';
router.route('/').post(verifyToken, createCart);
router.route('/find/:id').put(verifyToken, updateCart);
router.route('/find/:id').delete(verifyToken, deleteCart);
router.route('/find/:userId').get(verifyTokenAuthorization, getSingleCart);
router.route('/').get(verifyTokenIsAdmin, getAllCarts);

export default router;
