import express from 'express';
import { stripePay } from '../controller/stripeController.js';
const router = express.Router();

router.route('/', stripePay);
export default router;
