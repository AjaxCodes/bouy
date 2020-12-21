import React from "react";
import "./Store.css";
import Product from "./Product";
import tBlackblue from "../Images/tBlackblue.png";
import tBlackorange from "../Images/tBlackorange.png";
import tWhiteblue from "../Images/tWhiteblue.png";
import tWhiteorange from "../Images/tWhiteorange.png";

function Store() {
  return (
    <div className="store">
      <div classname="storeContainer"></div>
      <div>
        <div className="storeRow">
          <Product
            id="348567"
            title="black shirt with blue logo ** On Back Order **"
            price={20}
            image={tBlackblue}
            rating={4}
          />
          <Product
            id="348580"
            title=" white shirt with blue logo ** On Back Order **"
            price={20}
            image={tWhiteblue}
            rating={4}
          />
        </div>

        <div className="storeRow">
          <Product
            id="348537"
            title="black shirt with orange logo ** On Back Order **"
            price={20}
            image={tBlackorange}
            rating={4}
          />
          <Product
            id="348237"
            title="white shirt with orange logo ** On Back Order **"
            price={20}
            image={tWhiteorange}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Store;
