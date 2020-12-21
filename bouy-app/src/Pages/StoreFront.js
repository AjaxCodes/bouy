import React from "react";
import Header from "../Components/Header"
import Store from "../Components/Store";
import "./StoreFront.css";

function StoreFront() {
  return (
    <div className="storefront">
      <Header />
      <h4> payment is live you will not recieve any product, this is a class project</h4>
      
      <Store />

    </div>
  );
}

export default StoreFront;
