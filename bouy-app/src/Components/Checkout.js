import React from "react";
import "./Checkout.css";
import Header from "./Header";
import Subtotal from "./Subtotal";
function Checkout() {










  return (
    <div classname="check">
      <Header />

      <div className="checkout">
        <div Classname="checkoutLeft">
          <div>
            <h2 className="checkoutTitle">Your Basket</h2>
            {/* basketItem */}
            {/* basketItem */}
            {/* basketItem */}
            {/* basketItem */}
          </div>
        </div>
        <div classname="checkoutRight">
            <Subtotal/>
         
        </div>
      </div>
    </div>
  );
}

export default Checkout;
