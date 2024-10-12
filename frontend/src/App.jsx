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
  console.log(products);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const alertContainer = document.getElementById("alert");
    const messageContainer = document.getElementById("message");

    if (cart.some((cartItem) => cartItem._id === product._id)) {
      messageContainer.textContent = "Product is already added to the cart";
      alertContainer.style.color = "red";
      alertContainer.style.display = "block";
      setTimeout(() => {
        alertContainer.style.display = "none";
      }, 3000);
    } else {
      messageContainer.textContent = "Item added to the cart";
      alertContainer.style.color = "green";
      alertContainer.style.display = "block";
      setTimeout(() => {
        alertContainer.style.display = "none";
      }, 2000);

      setCart([...cart, { ...product, qty: 1 }]);
    }
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
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
