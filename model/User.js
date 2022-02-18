import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a username.'],
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
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// using mongoose methods middleware to create an access token within register and login controller
UserSchema.methods.createJWT = function () {
  const payload = { userId: this._id, isAdmin: this.isAdmin };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  return token;
};

// using pre mongoose middleware to crypt the password

UserSchema.pre('save', async function () {
  this.password = await CryptoJS.AES.encrypt(
    this.password,
    process.env.CRYPTO_SECRET
  );
});

export default mongoose.model('User', UserSchema);
