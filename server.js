import express from 'express';
import dotenv from 'dotenv';
import 'express-async-errors';
import connectDB from './db/connectDB.js';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import userRouter from './routes/user.js';

dotenv.config();
const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/v1', userRouter);

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
