import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

const CartSchema = new Schema(
  {
    userId: {
      type: String,
      required: [true, 'Please provide a userId.'],
    },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Cart', CartSchema);
