import { Request, Response } from "express";
import stripeServices from "src/stripe/stripe";
import {} from "../";

export const createCheckoutSession = async (req: Request, res: Response) => {
  const session = await stripeServices.createCheckoutSession();

  res.json({
    status: true,
    session: session,
  });
};

class CheckoutControllers {
  createPaymentIntent = async (req: Request, res: Response) => {
    const paymentIntent = await stripeServices.createPaymentIntent();
    res.json({
      status: true,
      payment_intent: paymentIntent,
    });
  };
}

const checkoutController = new CheckoutControllers();

export default checkoutController;
