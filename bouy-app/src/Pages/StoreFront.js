import React from "react";
import Header from "../Components/Header";
import Store from "../Components/Store";
import Payment from "../Components/Payment";
import "./StoreFront.css";
  {/* import { Elements } from "@stripe/react-stripe-js";  */}
{/* import { loadStripe } from "@stripe/stripe-js"; */}

 


 {/* const stripePromise = loadStripe("pk_test_51I0heLCQFbq3UYYujIRvssWmmRYwJn52f5mkd7F9d7SBwGTLG8UZDNTZmuTeNsYrr2N3fEbCIlv8nrqgituNoedh00r3G7kmSs"); */}

function StoreFront() {
  return (
    
      <div className="storefront">
       
        
         
            <Header />
           {/* <Elements stripe={stripePromise}>*/}
             
             
           {/* </Elements>     */}
        
          <Store />
      
      </div>
   
  );
}

export default StoreFront;
