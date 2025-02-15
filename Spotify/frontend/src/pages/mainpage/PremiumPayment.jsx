import React from "react";
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function PremiumPayment() {
  return (
    <>
      <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    </>
  );
}
