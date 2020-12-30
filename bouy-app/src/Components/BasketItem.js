import React from "react";
import "./BasketItem.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";

function BasketItem({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="basketItem">
      <img className="basketItemImage" src={image} alt="" />
      <div className="basketItemInfo">
        <p className="basketItemTitle">{title}</p>
        <p className="basketItemPrice">
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
        <button onClick={removeFromBasket}>Remove from cart</button>
      </div>
    </div>
  );
}

export default BasketItem;
