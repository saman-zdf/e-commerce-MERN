import Cart from '../model/Cart.js';
import { StatusCodes } from 'http-status-codes';

// CREATE CART
const createCart = async (req, res) => {
  const newCart = new Cart(req.body);
  const savedCart = await newCart.save();
  res.status(StatusCodes.CREATED).json(savedCart);
};

// UPDATE CART
const updateCart = async (req, res) => {
  const updatedCart = await Cart.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json(updatedCart);
};

// // DELETE CART
const deleteCart = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res
    .status(StatusCodes.OK)
    .json({ msg: 'Cart successfully has been deleted' });
};

// GET SINGLE CART
const getSingleCart = async (req, res) => {
  const { userId } = req.params;

  const cart = await Cart.findOne({ userId });

  res.status(StatusCodes.OK).json(cart);
};

// GET ALL CARTS
const getAllCarts = async (req, res) => {
  const carts = await Cart.find();
  res.status(StatusCodes.OK).json(carts);
};
export { createCart, updateCart, deleteCart, getSingleCart, getAllCarts };
