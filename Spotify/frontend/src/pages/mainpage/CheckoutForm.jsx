import React, {useState, useEffect} from "react";
import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js";
import '../../assets/styles/mainpage/checkout.css'

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({amount: 2999, currency: "usd"}), 
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) return;

    const cardElement = elements.getElement(CardElement);

    const {error, paymentIntent} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      console.error("Ödəniş xətası:", error);
    } else if (paymentIntent.status === "succeeded") {
      console.log("Ödəniş uğurlu oldu:", paymentIntent);
    }
  };

  function SweetAlert(){
    Swal.fire({
      title: 'Payment Successful!',
      text: 'Your subscription has been successfully created.',
      icon:'success',
      confirmButtonText: 'Okay',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/';
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Premium Subscription - 29.99 USD</h2>

      <label>
        <span>Card Number</span>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#32325d",
                letterSpacing: "0.025em",
                padding: "15px",
                backgroundColor: "#fff",
                "::placeholder": {
                  color: "#aab7c4",
                },
                border: "1px solid #ddd",
                borderRadius: "8px",
                marginBottom: "15px",
              },
            },
          }}
        />
      </label>

      <button type="submit" disabled={!stripe} onClick={()=>SweetAlert()}>
        Pay
      </button>
    </form>
  );
}
