import express from 'express';
import { register, login } from '../controller/authController.js';
import {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} from '../controller/userController.js';
import {
  verifyTokenAuthorization,
  verifyTokenIsAdmin,
} from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/:id').put(verifyTokenAuthorization, updateUser);
router.route('/:id').delete(verifyTokenIsAdmin, deleteUser);
router.route('/find/:id').get(verifyTokenIsAdmin, getUser);
router.route('/').get(verifyTokenIsAdmin, getAllUsers);

export default router;
