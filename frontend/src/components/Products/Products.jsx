import "./Products.css";
import React from "react";

function Products({ products, addToCart }) {
  return (
    <>
      <div>
        <h2 className="shop-header">Shop</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product._id} className="product">
              <div className="image-container">
                <img src={product.imageUrl} alt={product.alt} />
                <h3 className="productName">{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">{product.price.toFixed(2)} Birr</p>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
