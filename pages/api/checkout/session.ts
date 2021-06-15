import type { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const env = getConfig().publicRuntimeConfig;

// const STRIPE_SECRET_KEY = "sk_test_51HbqwSKOGzbsHBKackmZaRIWHLEH4BQ2Mz937fVClCENFK9ZyG2d2cEwSK6rWV6zODfyalaEsbbU4F8N76iqmFXA00KheWGPKH"

const stripe = require("stripe")("sk_test_51HbqwSKOGzbsHBKackmZaRIWHLEH4BQ2Mz937fVClCENFK9ZyG2d2cEwSK6rWV6zODfyalaEsbbU4F8N76iqmFXA00KheWGPKH");

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'mxn',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 500,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: 'mxn',
          product_data: {
            name: 'Caguamas',
          },
          unit_amount: 2000,
        },
        quantity: 2,
      }
    ],
    mode: 'payment',
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/store`,
  })
  res.status(200).json({ sessionId: session.id });
};
