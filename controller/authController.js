import User from '../model/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';
import CryptoJS from 'crypto-js';

// REGISTER
const register = async (req, res) => {
  let { username, email, password } = req.body;
  password = CryptoJS.AES.encrypt(password, process.env.CRYPTO_SECRET);

  if (!username && !email && !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.create({
    username: username,
    email: email,
    password: password,
  });

  res.status(StatusCodes.CREATED).json({ user });
};

export { register };
