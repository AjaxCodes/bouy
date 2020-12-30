import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import BasketItem from "./BasketItem";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(null);

  const handleSubmit = (e) => {

  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");

  };

  return (
    <div className="payment">
      <div className="paymentContainer">
        <h1>
          Checkout(<Link to="/checkout"> {basket?.length} items </Link>)
        </h1>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>1655 S. 117th Ct</p>
            <p>West Allis, WI </p>
          </div>
        </div>
        <div className="paymentSection">
          <div className="paymentTitle">
            <h3> Review Items</h3>
          </div>
          <div className="paymentItems">
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
          <div className="paymentTitle">
            <h3>Payment Method</h3>
          </div>
          <div className="paymentDetails">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
