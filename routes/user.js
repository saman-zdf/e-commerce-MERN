import express from 'express';
import User from '../model/User.js';
import StatusCodes from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';
const router = express.Router();

router.get('/user', (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'user route added' });
});

router.post('/user', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username && !email && !password) {
    throw new BadRequestError('Please provide values');
  }

  const user = await User.create({ username, email, password });

  res.status(StatusCodes.OK).json({ user });
});

export default router;
