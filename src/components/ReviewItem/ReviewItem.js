import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, img, seller, stock, price, quantity, key} = props.product;



    return (
        <div className="product-left-container">
            <div className="product-img">
                <img src={ img } alt="" />
            </div>
            <div className="product-details reviewItem">
                <h3>{ name }</h3>
                <p>by: { seller }</p>
                <p>$ { price }</p>
                <p>Quantity: {quantity}</p>
                <p>Only { stock } left stock - order soon</p><br />
                <button className="product-details-btn" onClick={ () => props.removeProduct(key) }>Remove</button>
            </div>
        </div>
        );
};
export default ReviewItem;