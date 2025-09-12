import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@mui/material";

const stripePromise = loadStripe("pk_test_51S5lKEFIroDd0p84WEBAD3seQk3KraJ8rWphK7vl83XsOjROEJia2rZBDikh03c3NVdGf7KvlINvAURdDSss0eu000SLx0b8GP");

const PaymentBtn = ({ cart, currency }) => {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);

        try {
            const res = await fetch("https://api.gearpro01e.com/payments/create-checkout-session/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                cart,
                currency: currency || "eur",   // send current currency
                }),
            });

            if (!res.ok) throw new Error("Failed to create checkout session");

            const { id } = await res.json();
            const stripe = await stripePromise;

            const { error } = await stripe.redirectToCheckout({ sessionId: id });

            if (error) {
                console.error("Stripe error:", error);
                alert(error.message);
            }

        } catch (err) {
            console.error("Error creating checkout session:", err);
            alert("Error initiating checkout.");
        }
        setLoading(false);
    };

    return (
        <Button 
            onClick={handlePayment} 
            disabled={loading}
            sx={{ margin: 2, width: "94%" }} variant="contained"
        >
            {loading ? "Redirecting..." : "Proceed to payment"}
        </Button>
    );
};

export default PaymentBtn;