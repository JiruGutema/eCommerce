import { useState, useEffect } from "react";
const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.log("fetching data from backend error.", e);
      }
    };
    fetchProducts();
  }, []);

  return products;
};
export default useProducts;
