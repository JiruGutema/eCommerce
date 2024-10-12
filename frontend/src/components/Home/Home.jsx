import "./Home.css";
import Products from "../Products/Products";

function Home({ products, addToCart }) {
  return (
    <>
      <Products products={products} addToCart={addToCart} />
    </>
  );
}

export default Home;
