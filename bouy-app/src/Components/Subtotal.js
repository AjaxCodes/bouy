import React  from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import PaymentIcon from '@material-ui/icons/Payment';
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "@reach/router";



function Subtotal() {
    
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
      <MenuItem>
          <Link to="/payment">
            <PaymentIcon /> Pay Now
          </Link>
        </MenuItem>
    </div>
  );
}

export default Subtotal;
