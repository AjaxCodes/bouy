import React from 'react';
import Header from "../Components/Header";
import Store from "../Components/Store";
import Cart from "../Components/Cart";
import "./StoreFront.css";

function StoreFront() {
    return (
        <div className="storefront">
           <Header/>
           <Cart/>
           <Store/>

          
            
            
        </div>
    )
}

export default StoreFront;
