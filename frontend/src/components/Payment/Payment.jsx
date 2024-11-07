import React, { useState } from "react";
import "./Payment.css";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic card verification logic
    if (cardNumber.length !== 16) {
      alert("Card number must be 16 digits long");
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      alert("Expiry date must be in MM/YY format");
      return;
    }

    if (cvv.length !== 3) {
      alert("CVV must be 3 digits long");
      return;
    }

    alert("Ordered successful. please check your email for confirmation");
  };

  return (
    <div className="payment">
      <h1>Payment</h1>
      <form className="paymentForm" onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default Payment;
