import express from 'express';
import StatusCodes from 'http-status-codes';
const router = express.Router();

router.get('/user', (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'user route added' });
});

router.post('/user', (req, res) => {
  const username = req.body.username;

  res.status(StatusCodes.OK).json({ username });
});

export default router;
