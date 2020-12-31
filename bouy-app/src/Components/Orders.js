import React from "react";
import "./Orders.css";
import moment from "moment";
import BasketItem from "./BasketItem";

function Orders({ order }) {
  return (
    <div className="orders">
      <h1>Your Order</h1>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="orderId">
       
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map(item =>
        <BasketItem
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
      />)}
      
    </div>
  );
}

export default Orders;
