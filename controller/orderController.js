import Order from '../model/Order.js';
import { StatusCodes } from 'http-status-codes';

// CREATE ORDER
const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  const savedOrder = await newOrder.save();
  res.status(StatusCodes.CREATED).json(savedOrder);
};

// UPDATE ORDER
const updateOrder = async (req, res) => {
  const updatedOrder = await Order.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json(updatedOrder);
};

// // DELETE ORDER
const deleteOrder = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res
    .status(StatusCodes.OK)
    .json({ msg: 'Order successfully has been deleted' });
};

// GET USER ORDER
const getUserOrder = async (req, res) => {
  const { userId } = req.params;

  const orders = await Order.find({ userId });

  res.status(StatusCodes.OK).json(orders);
};

// GET ALL ORDERS
const getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.status(StatusCodes.OK).json(orders);
};

// GET MONTHLY INCOME

const getMonthlyIncome = async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  console.log(lastMonth);
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  console.log(previousMonth);
  const income = await Order.aggregate([
    { $match: { createdAt: { $gte: previousMonth } } },
    {
      $project: {
        month: { $month: '$createdAt' },
        sales: '$amount',
      },
    },
    { $group: { _id: '$month', total: { $sum: '$sales' } } },
  ]);
  res.status(StatusCodes.OK).json({ income });
};

export {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrder,
  getAllOrders,
  getMonthlyIncome,
};
