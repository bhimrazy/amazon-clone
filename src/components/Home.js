import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div>
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg"
          alt="amazon Home"
        />
        <div className="home__row">
          {/* Product */}
          <Product />
          {/* Product */}
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
