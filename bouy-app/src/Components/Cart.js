import React from "react";
import "./Cart.css";
import { Link } from "@reach/router";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


function Cart() {
  return (
    <div classname="basket">
      <Link to="/checkout">
        <ShoppingCartIcon />
      </Link>

      <span className="basketCount">0</span>
    </div>
  );
}

export default Cart;
