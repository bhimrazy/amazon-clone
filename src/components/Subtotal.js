import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../contextapi/StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();
  var price = 0;
  basket.map((basket) => {
    return (price += basket.price);
  });
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* homework */}
              Subtotal ({basket.length} items):
              <strong> ${price ? price : "0"}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // homework
        value={0}
        // value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"&"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
