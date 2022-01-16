import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripeElements } from "@stripe/stripe-js";
import React, { useEffect } from "react";

interface CheckoutFormIntreface {
  clientSecret: string;
}
const CheckoutForm = ({ clientSecret }: CheckoutFormIntreface) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await stripe?.confirmPayment({
      elements: elements as StripeElements,
      confirmParams: {
        return_url: "http://localhost:3000/checkout",
      },
    });

    console.log("Confirm payment repsponse >>>", response);
    debugger;
  };

  const checkPaymentStatus = async () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const clientSecretId = urlSearchParams.get("payment_intent_client_secret");
    const paymentResponse = await stripe?.retrievePaymentIntent(
      clientSecretId as string
    );
    console.log("Retrive payment repsonse >>>", paymentResponse);

    debugger;
  };

  checkPaymentStatus();

  useEffect(() => {
    checkPaymentStatus();
  }, [window.location]);

  return (
    <form className="checkout-form w-96 mx-auto mt-24" onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        className="pay-button w-full bg-gray-800 font-medium text-white p-3 mt-4 rounded-full"
        type="submit"
      >
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
