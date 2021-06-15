import { NextApiRequest, NextApiResponse } from 'next'
import getConfig from "next/config";

const env = getConfig().publicRuntimeConfig;

const STRIPE_SECRET_KEY = "sk_test_51HbqwSKOGzbsHBKackmZaRIWHLEH4BQ2Mz937fVClCENFK9ZyG2d2cEwSK6rWV6zODfyalaEsbbU4F8N76iqmFXA00KheWGPKH"

const stripe = require("stripe")("sk_test_51HbqwSKOGzbsHBKackmZaRIWHLEH4BQ2Mz937fVClCENFK9ZyG2d2cEwSK6rWV6zODfyalaEsbbU4F8N76iqmFXA00KheWGPKH");
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const id: string = req.query.id as string
    try {
        if (!id.startsWith('cs_')) {
            throw Error('Incorrect CheckoutSession ID.')
        }
        const checkout_session: Stripe.Checkout.Session = await stripe.checkout.sessions.retrieve(
            id,
            { expand: ['payment_intent'] }
        )

        res.status(200).json(checkout_session)
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}