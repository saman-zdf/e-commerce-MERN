import express from 'express';
import User from '../model/User.js';
import StatusCodes from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';
import { register } from '../controller/authController.js';
const router = express.Router();

router.route('/register').post(register);

export default router;
