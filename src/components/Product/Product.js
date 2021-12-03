import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import {Link} from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product);
    const {img, name, seller, price, stock, key} = props.product;
    return (
        <div className="product-left-container">
            <div className="product-img">
                <img src={ img } alt="" />
            </div>
            <div className="product-details">
                <Link to={`/product/${key}`}><h3>{ name }</h3></Link>
                <p>by: { seller }</p>
                <p>$ { price }</p>
                <p>Only { stock } left stock - order soon</p>
                <button className="product-details-btn" onClick={ () => props.handleAddProduct(props.product) }><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
        
    );
};

export default Product;