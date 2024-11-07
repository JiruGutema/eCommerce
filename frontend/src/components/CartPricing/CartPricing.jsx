import "./CartPricing.css";
import { useNavigate } from "react-router-dom";

const CartPricing = ({ calculateTotalPrice }) => {
  const subTotal = calculateTotalPrice();
  const tax = subTotal * 0.009;
  const total = subTotal + tax;

  const navigate = useNavigate();

  const paymentRouter = () => {
    navigate("/payment");
  };

  return (
    <>
      <div className="pricing-container" id="pricing-container">
        <h3>Order Summery</h3>
        <div className="subtotal">
          <h3>Subtotal</h3>
          <div>${subTotal.toFixed(2)}</div>
        </div>
        <div className="tax">
          <h3>Tax</h3>
          <div>${tax.toFixed(2)}</div>
        </div>
        <div className="shipping">
          <h3>Delivery Cost</h3>
          <div>Free</div>
        </div>
        <div className="total">
          <h3>Total price</h3>
          <div>${total.toFixed(2)}</div>
        </div>
        <button className="check-out" onClick={paymentRouter}>
          Order Now
        </button>
      </div>
    </>
  );
};
export default CartPricing;
