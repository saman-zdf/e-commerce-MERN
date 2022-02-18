import express from 'express';
import { register, login } from '../controller/authController.js';
import { updateUser } from '../controller/userController.js';
import { verifyTokenAuthorization } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/:id').put(verifyTokenAuthorization, updateUser);

export default router;
