import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title.'],
      unique: true,
    },
    desc: {
      type: String,
      required: [true, 'Please provide a desc.'],
    },
    image: {
      type: String,
      required: [true, 'Please provide a image.'],
    },
    categories: {
      type: Array,
      required: [true, 'Please provide a category.'],
    },
    size: {
      type: Array,
    },
    color: {
      type: Array,
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price.'],
    },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model('Product', ProductSchema);
