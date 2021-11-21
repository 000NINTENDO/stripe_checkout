import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, Appearance } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
);

console.log(process.env.REACT_APP_STRIPE_API_KEY);

const createPaymentIntentRequest = () => {
  return fetch("http://localhost:5000/api/checkout/create-payment-intent", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => res.json());
};

const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState("");

  const createPaymentIntent = async () => {
    createPaymentIntentRequest().then((res) => {
      if (res.payment_intent.client_secret) {
        setClientSecret(res.payment_intent.client_secret);
      }
      debugger;
    });
  };

  useEffect(() => {
    createPaymentIntent();
  }, []);

  const appearance: Appearance = {
    theme: "stripe",
  };

  const elementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <div className="checkout-product">
      {clientSecret && (
        <Elements options={elementsOptions} stripe={stripePromise}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default CheckoutPage;
