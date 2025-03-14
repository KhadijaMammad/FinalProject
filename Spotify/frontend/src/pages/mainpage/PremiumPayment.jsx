import React from "react";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function PremiumPayment() {
  return (
    <>
      <div className="container">
       <div className="premium-payment" style={{height:'90vh', marginTop:'50px'}}>
        <h2 style={{textAlign:'center', color:'white'}}>Premium Payment</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
       </div>
      </div>
    </>
  );
}
