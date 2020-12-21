import React from "react";
import Header from "../Components/Header"
import Store from "../Components/Store";
import "./StoreFront.css";

function StoreFront() {
  return (
    <div className="storefront">
      <Header />
      
      <Store />

    </div>
  );
}

export default StoreFront;
