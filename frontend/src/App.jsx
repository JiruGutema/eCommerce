import "./App.css";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import useProducts from "./hooks/useProducts";
import { useEffect, useState } from "react";
import Alert from "./components/Alert/Alert";
import LoginForm from "./components/LoginSignUp/LoginForm";
import Payment from "./components/Payment/Payment";

// Create a simple 404 component
const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

function App() {
  const products = useProducts();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    // Persist authentication
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCart([]);
    localStorage.removeItem("cart");
    localStorage.removeItem("isAuthenticated"); // Clear authentication
  };

  const addToCart = (product) => {
    const alertContainer = document.getElementById("alertMessage");
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
    <BrowserRouter>
      <NavBar
        cartItems={cart}
        onClick={handleLogout}
        isAuthenticated={localStorage.getItem("isAuthenticated")}
      />
      <Alert />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              addToCart={addToCart}
              isAuthenticated={localStorage.getItem("isAuthenticated")}
            />
          }
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
        <Route
          path="/Login"
          element={<LoginForm onLoginSuccess={handleLoginSuccess} />}
        />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
