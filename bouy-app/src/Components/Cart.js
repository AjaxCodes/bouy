import React from "react";
import "./Cart.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Cart() {
  return (
    <div classname="basket">
      <ShoppingCartIcon />
      <span className="basketCount">0</span>
    </div>
  );
}

export default Cart;
