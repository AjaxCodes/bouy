import React from 'react';
import "./Product.css";
import tBlackblue from "../Images/tBlackblue.png";
import StarIcon from '@material-ui/icons/Star';

function Product({title, image, price, rating}) {





    return (
        <div className="product">
            <div className="productInfo">
                <p> Black shirt with blue logo ** On Back Order **</p>
                <p className="productPrice"> 
                <small> $</small><strong>20.00 </strong> </p>
                

            </div >
            <div className="productRating">
            <StarIcon/><StarIcon/><StarIcon/><StarIcon/>
            


            </div>

            <img src={tBlackblue} alt="shirt"/>
            <button> Add to cart</button>
        </div>
    )
}

export default Product;
