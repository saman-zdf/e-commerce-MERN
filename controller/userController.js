import User from '../model/User.js';
import CryptoJS from 'crypto-js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_SECRET
    ).toString();
  }

  const user = await User.findByIdAndUpdate(
    id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json({ user });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res
    .status(StatusCodes.OK)
    .json({ msg: 'User has been deleted successfully!!' });
};

// GET USER
const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ id });
  const { password, ...rest } = user;
  res.status(StatusCodes.OK).json({ user: rest._doc });
};
export { updateUser, deleteUser, getUser };
