import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../contextapi/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  // const cartItems = basket.map((basket) => {
  //   return (
  //     <div className="checkout__item">
  //       <img src={basket.image} alt={basket.title} />
  //       <div className="checkout__productInfo">
  //         <p className="checkout__productTitle">{basket.title}p</p>
  //         <p className="checkout__productPrice">
  //           <small>$</small>
  //           <strong>{basket.price}</strong>
  //         </p>
  //         <button>Delete from Basket</button>
  //       </div>
  //     </div>
  //   );
  // });
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout ad"
        />
        <div>
          <h3> Hello,{user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* <div className="checkout__items">{cartItems}</div> */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
