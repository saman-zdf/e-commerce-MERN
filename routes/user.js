import express from 'express';
import User from '../model/User.js';
import StatusCodes from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';
import { register, login } from '../controller/authController.js';
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);

export default router;
