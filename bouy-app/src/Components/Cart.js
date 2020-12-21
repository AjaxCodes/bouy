import React from "react";
import "./Cart.css";
import { Link } from "@reach/router";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../StateProvider";


function Cart() {
  const [{ basket }, dispatch] = useStateValue();






  return (
    <div classname="basket">
      <Link to="/checkout">
        <ShoppingCartIcon />
      </Link>

      <span className="basketCount">{basket?.length}</span>
    </div>
  );
}

export default Cart;
