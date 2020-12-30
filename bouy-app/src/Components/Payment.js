import React from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import BasketItem from "./BasketItem";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div classname="paymentContainer">
        <div className="paymentSection">
          <h1>
            Checkout(<Link to="/checkout"> {basket?.length} items </Link>)
          </h1>
        </div>

        <div className="paymentSection">
          <div classname="paymentTitle">
            <h3> Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p> {user?.email}</p>
            <p>1650 S115th Ct</p>
            <p>West Allis, WI</p>
          </div>
        </div>
        <div className="paymentSection">
          <div classname="paymentTitle">
            <h3>Review items and Delivery dates</h3>
          </div>
          <div classname="paymentItems">
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
        <div className="paymentSection">
          <div classname="paymentTitle">
            <h3>Payment Method</h3>
          </div>
          <div classname="paymentDetails"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
