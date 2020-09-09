import React from "react";
import "./Product.css";
function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>2099</strong>
        </p>
        <div className="product__string">
          <p>⭐</p>
        </div>
      </div>
      <img
        className="product__image"
        src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        alt="Product Image"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
