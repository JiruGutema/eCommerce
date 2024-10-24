import "./Payment.css";

function Payment() {
  return (
    <div className="payment">
      <h1>Payment</h1>
      <form className="paymentForm">
        <label htmlFor="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" name="cardNumber" />
        <label htmlFor="expiryDate">Expiry Date</label>
        <input type="text" id="expiryDate" name="expiryDate" />
        <label htmlFor="cvv">CVV</label>
        <input type="text" id="cvv" name="cvv" />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default Payment;
