import React from "react";
import "./CartItems.css";
import { Link } from "react-router-dom";
import CartPricing from "../CartPricing/CartPricing";

const CartItems = ({
  cart = [],
  removeFromCart,
  handleQuantityChange,
  calculateTotalPrice,
}) => {
  const handleChange = (e, item) => {
    handleQuantityChange(item._id, parseInt(e.target.value));
  };

  return (
    <>
      <div className="cart-item">
        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>Your Cart is Empty</h2>

            <Link to="/" className="">
              {" "}
              Continue Shopping
            </Link>
          </div>
        ) : (
          cart.map((item, index) => (
            <div className="product-in-cart" key={index}>
              <div className="product-in-cart-left">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="image-in-Product"
                />
                <div className="product-info">
                  <p>Item: {item.name} </p>
                  <p>sku: {item.sku}</p>
                </div>
              </div>
              <div className="product-in-cart-right">
                <div>
                  <p>Each</p>
                  <div className="price">{item.price.toFixed(2)}</div>
                </div>
                <div className="quantity">
                  <label htmlFor={`quantity-${item._id}`}>Qty</label>
                  <select
                    name="quantity"
                    id={`quantity-${item._id}`}
                    value={item.qty}
                    onChange={(e) => handleChange(e, item)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
                <button
                  className="removeFromCartbtn"
                  onClick={() => removeFromCart(item._id)}
                >
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CartItems;
