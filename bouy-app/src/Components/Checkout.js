import React from "react";
import "./Checkout.css";
import Header from "./Header";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import BasketItem from "./BasketItem";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div classname="check">
      <Header />

      <div className="checkout">
        <div Classname="checkoutLeft">
          <div>
            <h2 className="checkoutTitle">Your Cart</h2>
            {basket.map((item) => (
              <BasketItem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div classname="checkoutRight">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
