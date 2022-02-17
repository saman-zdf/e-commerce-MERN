import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
dotenv.config();
const app = express();

// middleware
app.use(express.json());

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
