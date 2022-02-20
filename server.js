import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import connectDB from './db/connectDB.js';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import userRouter from './routes/user.js';
import productRouter from './routes/product.js';
import cartRouter from './routes/cart.js';
import orderRouter from './routes/order.js';
import stripeRouter from './routes/stripe.js';
import cors from 'cors';

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/carts', cartRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/payment', stripeRouter);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// errors
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = () => {
  try {
    connectDB(process.env.MONGO_URL);

    app.listen(PORT, () => {
      console.log('server listen on port ' + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
