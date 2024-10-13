import "./App.css";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import useProducts from "./hooks/useProducts";
import { useEffect, useState } from "react";
import Alert from "./components/Alert/Alert";

function App() {
  const products = useProducts();

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    try {
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.error("Error parsing cart from localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const alertContainer = document.getElementById("alertMessage");
    const messageContainer = document.getElementById("message");

    if (cart.some((cartItem) => cartItem._id === product._id)) {
      messageContainer.textContent = "Product is already added to the cart";
      alertContainer.style.color = "white";
      alertContainer.style.display = "block";
      alertContainer.style.backgroundColor = "red";
      setTimeout(() => {
        alertContainer.style.display = "none";
      }, 3000);
    } else {
      messageContainer.textContent = "Item added to the cart";
      alertContainer.style.backgroundColor = "green";
      alertContainer.style.color = "white";
      alertContainer.style.display = "block";
      setTimeout(() => {
        alertContainer.style.display = "none";
      }, 2000);

      setCart([...cart, { ...product, qty: 10 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + (item.price || 0) * (item.qty || 1),
      0
    );
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, qty: newQuantity } : item
      )
    );
  };

  return (
    <>
      <BrowserRouter>
        <NavBar cartItems={cart} />
        <Alert />
        <Routes>
          <Route
            path="/"
            element={<Home products={products} addToCart={addToCart} />}
          />
          <Route
            path="/Cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                calculateTotalPrice={calculateTotalPrice}
                handleQuantityChange={handleQuantityChange}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
