import { headers } from 'next/headers';
import Stripe from 'stripe';
import { db } from '../../../../prisma/db';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('Stripe-Signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (error: any) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (
    event.type === 'checkout.session.completed' ||
    event.type === 'invoice.payment_succeeded'
  ) {
    const job_id = session.metadata?.job_id;
    if (!job_id) {
      return new Response(null, { status: 400 });
    }
    const jobsPost = await db.jobPost.findUnique({
      where: {
        id: parseInt(job_id),
      },
    });

    if (jobsPost) {
      // Update the 'featured' value
      jobsPost.featured = true;

      // Save the updated 'jobsPost' object back to the database
      await db.jobPost.update({
        where: { id: parseInt(job_id) },
        data: {
          featured: true,
        },
      });
    }
  }

  if (event.type === 'checkout.session.expired') {
    // If the payment failed, we want to cancel the subscription.
    // const { data, error } = await resend.emails.send({
    //   from: config.fromEmail as string,
    //   to: session.customer_email as string,
    //   subject: 'Did your payment fail? 🤔',
    //   react: AppleReceiptEmail(),
    // });
    // if (error) {
    //   console.log(error);
    // }
  }

  return new Response(null, { status: 200 });
}
