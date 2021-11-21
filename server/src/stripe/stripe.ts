import stripe from "stripe";

class StripeServices {
  stripe = new stripe(process.env.STRIPE_API_KEY as string, {
    typescript: true,
    apiVersion: "2020-08-27",
  });

  createCheckoutSession = async () => {
    return await this.stripe.checkout.sessions.create({
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
  };

  createPaymentIntent = () => {
    return this.stripe.paymentIntents.create({
      amount: 1200,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  };
}

const stripeServices = new StripeServices();

export default stripeServices;
