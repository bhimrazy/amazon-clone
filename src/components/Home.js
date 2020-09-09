import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg"
          alt="amazon Home"
        />
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung Gear Fit2 Smartwatch Large, Black"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61qDKbBlcgL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean Startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            title="The lean Startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            title="The lean Startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="98829332"
            title="The lean Startup"
            price={149.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91TrJ3M5EML._AC_SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
