import { PaymentElement, useStripe } from "@stripe/react-stripe-js";
import React from "react";

interface CheckoutFormIntreface {
  clientSecret: string;
}
const CheckoutForm = ({ clientSecret }: CheckoutFormIntreface) => {
  const stripe = useStripe();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    stripe?.retrievePaymentIntent(clientSecret).then((paymentIntent) => {
      debugger;
    });
  };

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
