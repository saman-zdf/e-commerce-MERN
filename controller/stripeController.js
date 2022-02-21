import { StatusCodes } from 'http-status-codes';

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_KEY);

const stripePay = async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ stripeErr });
      } else {
        res.status(StatusCodes.OK).json({ stripeRes });
      }
    }
  );
};

export { stripePay };
