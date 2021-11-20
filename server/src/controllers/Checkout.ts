import { Request, Response } from "express";
import Strip from "stripe";

export const createCheckoutSession = async (req: Request, res: Response) => {
  const stripe = new Strip(process.env.STRIPE_API_KEY as string, {
    typescript: true,
    apiVersion: "2020-08-27",
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: "price_1Jxw9ASGghkSRHlwMrXuVlh5",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/checkout/payment/success",
    cancel_url: "http://localhost:3000/checkout/payment/cancel",
  });

  res.json({
    status: true,
    session: session,
  });
};
