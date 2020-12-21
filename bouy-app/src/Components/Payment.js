import React, { useState } from "react";
import "./Payment.css";
 {/*import { useStateValue } from "../StateProvider";*/}
 {/*import BasketItem from "./BasketItem";*/}
 import { Link } from "@reach/router";
 {/*import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";*/}
 {/*import { Elements } from "@stripe/react-stripe-js";*/}
 {/*import CurrencyFormat from "react-currency-format";*/}
 {/*import getBasketTotal from "./Checkout";*/}

function Payment() {
 {/*const [{ basket, user }, dispatch] = useStateValue();*/}


   {/*const stripe = useStripe();*/}
  {/* const elements = useElements(); */}     {/* */}

   {/*const [error, setError] = useState(null);*/}
   {/*const [disabled, setDisabled] = useState(true);*/}

   {/*const handleSubmit = e => {*/}

  {/* const handleChange = e => {*/}
   {/* }*/}
  {/* const handleChange = e => {*/}
    

  {/* const handleChange = e => {*/}
   {/* }*/}

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
          <div classname="paymentDetails">
          
         {/*  <form onSubmit={handleSubmit}>  */}
            {/* <Elements> */}
           {/*  <CardElement onChange={handleChange}/> */}


          {/*   </Elements> */}
          {/*   <div className="paymentPriceContainer">  */}
           {/*  <CurrencyFormat  */}
            {/* rendertext={(value)=>( */}
           {/*    <> */}
           {/*    <h3>Order Total: {value}</h3> */}
           {/*    </> */}
           {/*  )} */}
           {/*  decimalScale={2} */}
           {/*  value={getBasketTotal(basket)} */}
           {/*  displayType={"text"} */}
           {/*  thousandSeperator={true} */}
            {/* prefix={"$"}/> */}

            {/* </div> */}
          {/* </form> */}





          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Payment;
