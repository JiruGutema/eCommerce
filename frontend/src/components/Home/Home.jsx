import "./Home.css";
import Products from "../Products/Products";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home({ products, addToCart, isAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate("/Login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    // Optionally render a loading state or nothing until redirection occurs
    return null; // Or a loading spinner
  }

  return (
    <>
      <Products products={products} addToCart={addToCart} />
    </>
  );
}

export default Home;
