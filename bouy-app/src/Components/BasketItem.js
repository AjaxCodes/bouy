import React from "react";
import "./BasketItem.css";
import StarIcon from "@material-ui/icons/Star";

function BasketItem({id, title, image, price, rating }) {
  return (
    <div classname="basketItem">
      <img classname="basketItemImage" src={image} alt=""/>
      <div className="basketItemInfo">
        <p className="basketItemTitle">{title}</p>
        <p classname="basketItemPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div classname="basketItemRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon />
            ))}
        </div>
        <button>Remove from cart</button>
      </div>
    </div>
  );
}

export default BasketItem;
