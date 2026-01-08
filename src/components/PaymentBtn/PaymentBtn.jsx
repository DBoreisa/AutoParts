import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
} from "@mui/material";

const stripePromise = loadStripe("pk_live_51S68h5Jtqs7nLYbt8uh6KWPVCkH1axKXxbvd32YaVHsSJyC1fG50axOvncXN5VOJ1R9ZjdNc73j4UIDYwUvP3f4800MHfXZpX4");

const PaymentBtn = ({ cart, currency }) => {
    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState({
        country: "",
        city: "",
        street: "",
        postal_code: "",
    });

    const [shipping, setShipping] = useState(null);
    const [loadingShip, setLoadingShip] = useState(false);
    const [loadingPay, setLoadingPay] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleAddressChange = (e) => {
        setAddress({
        ...address,
        [e.target.name]: e.target.value,
        });
    };

    const calculateShipping = async () => {
        setLoadingShip(true);
        try {
            const res = await fetch("https://api.gearpro01e.com/shipping/calc/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cart,
                    address,
                    value_eur: cart.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                    ),
                }),
            });

            if (!res.ok) throw new Error("Failed to get shipping price");

            const data = await res.json();

            setShipping(data.shipping_price.amount); // eur value

        } catch (err) {
            alert("Error calculating shipping");
            console.error(err);
        }
        setLoadingShip(false);
    };

    const handlePayment = async () => {
        setLoadingPay(true);

        try {
            const checkoutRes = await fetch(
                "https://api.gearpro01e.com/payments/create-checkout-session/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        cart,
                        currency,
                        shipping_price: shipping,
                        address,
                    }),
                }
            );

            if (!checkoutRes.ok) throw new Error("Failed to create session");

            const { id } = await checkoutRes.json();

            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({ sessionId: id });

            if (error) alert(error.message);
        } catch (err) {
            alert("Payment error");
            console.error(err);
        }
        setLoadingPay(false);
    };

    return (
        <>
            <Button 
                onClick={handleOpen} 
                sx={{ margin: 2, width: "94%" }} variant="contained"
            >
                Calculate shipping price & Pay
            </Button>

            {/* ADDRESS POPUP */}
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Enter your shipping address</DialogTitle>
                <DialogContent>
                    <TextField
                        select
                        margin="dense"
                        label="Country"
                        name="country"
                        fullWidth
                        value={address.country}
                        onChange={handleAddressChange}
                        SelectProps={{
                            native: true,
                        }}
                        >
                        <option value=""></option>
                        {[
                            { code: "US", name: "United States" },
                            { code: "CA", name: "Canada" },
                            { code: "AT", name: "Austria" },
                            { code: "BE", name: "Belgium" },
                            { code: "BG", name: "Bulgaria" },
                            { code: "HR", name: "Croatia" },
                            { code: "CY", name: "Cyprus" },
                            { code: "CZ", name: "Czechia" },
                            { code: "DK", name: "Denmark" },
                            { code: "EE", name: "Estonia" },
                            { code: "FI", name: "Finland" },
                            { code: "FR", name: "France" },
                            { code: "DE", name: "Germany" },
                            { code: "GR", name: "Greece" },
                            { code: "HU", name: "Hungary" },
                            { code: "IE", name: "Ireland" },
                            { code: "IT", name: "Italy" },
                            { code: "LV", name: "Latvia" },
                            { code: "LT", name: "Lithuania" },
                            { code: "LU", name: "Luxembourg" },
                            { code: "MT", name: "Malta" },
                            { code: "NL", name: "Netherlands" },
                            { code: "PL", name: "Poland" },
                            { code: "PT", name: "Portugal" },
                            { code: "RO", name: "Romania" },
                            { code: "SK", name: "Slovakia" },
                            { code: "SI", name: "Slovenia" },
                            { code: "ES", name: "Spain" },
                            { code: "SE", name: "Sweden" },
                            { code: "NO", name: "Norway" },
                            { code: "CH", name: "Switzerland" },
                            { code: "IS", name: "Iceland" },
                            { code: "GB", name: "United Kingdom" },
                        ].map(({ code, name }) => (
                            <option key={code} value={code}>{name}</option>
                        ))}
                    </TextField>

                    <TextField
                        margin="dense"
                        label="City"
                        name="city"
                        fullWidth
                        value={address.city}
                        onChange={handleAddressChange}
                    />
                    <TextField
                        margin="dense"
                        label="Street Address"
                        name="street"
                        fullWidth
                        value={address.street}
                        onChange={handleAddressChange}
                    />
                    <TextField
                        margin="dense"
                        label="Postcode"
                        name="postal_code"
                        fullWidth
                        value={address.postal_code}
                        onChange={handleAddressChange}
                    />

                    {/* Show shipping price */}
                    {loadingShip ? (
                        <p><CircularProgress size={20}/> Calculating shipping…</p>
                    ) : shipping !== null ? (
                        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                            Shipping price: {shipping} €
                        </p>
                    ) : null}
                </DialogContent>
                <DialogActions>
                    {!shipping && (
                        <Button onClick={calculateShipping} disabled={loadingShip}>
                            Calculate shipping
                        </Button>
                    )}

                    {/* Pay button appears only when shipping calculated */}
                    {shipping && (
                        <Button onClick={handlePayment} disabled={loadingPay}>
                        {loadingPay ? "Processing..." : "Pay now"}
                        </Button>
                    )}

                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default PaymentBtn;