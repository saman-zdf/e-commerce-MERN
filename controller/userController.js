import User from '../model/User.js';
import CryptoJS from 'crypto-js';
import { StatusCodes } from 'http-status-codes';

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

// GET ALL USERS
const getAllUsers = async (req, res) => {
  const query = req.query.new;
  const users = query
    ? await User.find({}).sort({ _id: -1 }).limit(5)
    : await User.find({});

  res.status(StatusCodes.OK).json({ users });
};

// GET USERS STATS
const getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  const data = await User.aggregate([
    { $match: { createdAt: { $gte: lastYear } } },
    { $project: { month: { $month: '$createdAt' } } },
    { $group: { _id: '$month', total: { $sum: 1 } } },
  ]);
  res.status(StatusCodes.OK).json(data);
};
export { updateUser, deleteUser, getUser, getAllUsers, getUserStats };
