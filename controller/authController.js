import User from '../model/User.js';
import { StatusCodes } from 'http-status-codes';
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from '../errors/index.js';
import CryptoJS from 'crypto-js';

// REGISTER
const register = async (req, res) => {
  let { username, email, password } = req.body;

  if (!username && !email && !password) {
    throw new BadRequestError('Please provide all values');
  }
  const user = await User.create({
    username: username,
    email: email,
    password: password,
  });
  const token = user.createJWT();

  res.status(StatusCodes.CREATED).json({ user, token });
};

// LOGIN
const login = async (req, res) => {
  const { email } = req.body;

  if (!email && !req.body.password) {
    throw new BadRequestError('Please provide all values');
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnAuthenticatedError('Wrong Credentials!!!');
  }
  const hashedPassword = CryptoJS.AES.decrypt(
    user.password,
    process.env.CRYPTO_SECRET
  );
  const pass = hashedPassword.toString(CryptoJS.enc.Utf8);
  console.log(pass);
  if (pass !== req.body.password) {
    throw new BadRequestError('Wrong Password!!!');
  }
  const token = user.createJWT();

  const { password, ...rest } = user._doc;

  res.status(StatusCodes.OK).json({ rest, token });
};

export { register, login };
