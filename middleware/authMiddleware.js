import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import { UnAuthenticatedError } from '../errors/index.js';

const verifyToken = async (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (authHeaders) {
    const token = authHeaders.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      console.log(user);
      if (err)
        res.status(StatusCodes.FORBIDDEN).json({ msg: 'Token is invalid' });
      req.user = user;
      next();
    });
  } else {
    res.status(StatusCodes.UNAUTHORIZED).json({
      msg: 'Authentication is invalid',
    });
  }
};

const verifyTokenAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.userId === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(StatusCodes.UNAUTHORIZED).json({
        msg: 'You are not allowed to do that!!!',
      });
    }
  });
};

export { verifyToken, verifyTokenAuthorization };
