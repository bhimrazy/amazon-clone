import React from "react";
import "./Product.css";
function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}p</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="rating">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt={title} />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
