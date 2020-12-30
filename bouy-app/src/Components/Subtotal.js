import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import {  useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div classname="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items)
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
      />
      <br/>
    <button onClick={e => history.push('/payment')}>Pay Now</button>
    </div>
  );
  
}

export default Subtotal;
