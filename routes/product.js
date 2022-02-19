import express from 'express';
import {
  verifyTokenAuthorization,
  verifyTokenIsAdmin,
} from '../middleware/authMiddleware.js';
import {
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
  getAllProducts,
} from '../controller/productController.js';
const router = express.Router();

router.route('/').post(verifyTokenIsAdmin, createProduct);
router.route('/:id').put(verifyTokenIsAdmin, updateProduct);
router.route('/:id').delete(verifyTokenIsAdmin, deleteProduct);
router.route('/find/:id').get(getProduct);
router.route('/').get(getAllProducts);

export default router;
