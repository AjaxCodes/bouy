import React from "react";
import "./Store.css";
import Product from "./Product";

function Store() {

    
  return (
    <div className="store">
      <div classname="storeContainer"></div>
      
      <div className="storeRow">
        <Product />
        <Product />
      </div>
      
      <div className="storeRow">
        <Product />
        <Product />
      </div>

    </div>
  );
}

export default Store;
