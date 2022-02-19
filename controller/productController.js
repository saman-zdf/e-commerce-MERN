import Product from '../model/Product.js';
import { StatusCodes } from 'http-status-codes';

// CREATE PRODUCT
const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.status(StatusCodes.CREATED).json(savedProduct);
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json(updatedProduct);
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res
    .status(StatusCodes.OK)
    .json({ msg: 'Product successfully has been deleted' });
};

// GET SINGLE PRODUCT
const getProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne({ id });

  res.status(StatusCodes.OK).json(product);
};

// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
  const queryNew = req.query.new;
  const queryCategory = req.query.category;
  let products = [];
  if (queryNew) {
    products = await Product.find().sort({ createdAt: -1 }).limit(5);
  } else if (queryCategory) {
    products = await Product.find({
      categories: {
        $in: queryCategory,
      },
    });
  } else {
    products = await Product.find({});
  }
  res.status(StatusCodes.OK).json(products);
};
export {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
};
