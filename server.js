import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
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
