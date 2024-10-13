import "./Cart.css";
import CartItems from "../CartItems/CartItems";
import { Link } from "react-router-dom";
import CartPricing from "../CartPricing/CartPricing";
import Home from "../Home/Home";

function Cart({
  cart,
  removeFromCart,
  handleQuantityChange,
  calculateTotalPrice,
}) {
  return (
    <>
      <div className="cart-section">
        <h1>Cart</h1>
        <Link to="/" className="continueShopping">
          {" "}
          Continue Shopping
        </Link>
        <div className="row">
          <CartItems
            cart={cart}
            calculateTotalPrice={calculateTotalPrice}
            removeFromCart={removeFromCart}
            handleQuantityChange={handleQuantityChange}
          />
          <CartPricing calculateTotalPrice={calculateTotalPrice} />
        </div>
      </div>
    </>
  );
}
export default Cart;
