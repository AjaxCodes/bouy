import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="productInfo">
        <p> {title}</p>
        <p className="productPrice">
          <small> $</small>
          <strong>{price} </strong>{" "}
        </p>
      
      <div className="productRating">
        {Array(rating).fill().map((_, i) => (
            <StarIcon/>
        ))}
      </div>
      </div>

      <img src={image} alt="shirt" />
      <button> Add to cart</button>
    </div>
  );
}

export default Product;
