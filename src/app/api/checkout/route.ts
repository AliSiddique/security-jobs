import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
export async function POST(req: Request) {
  try {
    const params: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card', 'paypal'],
      mode: 'payment',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],

      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/`,
    };

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);
    console.log(checkoutSession);
    return NextResponse.json({ body: req.json(), ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'something went wrong', ok: false },
      { status: 500 }
    );
  }
}
