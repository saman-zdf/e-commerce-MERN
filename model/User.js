import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a name.'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide a email.'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password.'],
      minlength: 6,
      select: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
