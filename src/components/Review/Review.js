import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import OrderPlacedImg from '../../images/order_placed.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    useEffect( () => {
        const exitingCart = getDatabaseCart();
        const productKeys = Object.keys(exitingCart);
        const previousCart = productKeys.map(exitingKey => {
            const product = fakeData.find(pd => pd.key === exitingKey);
            product.quantity = exitingCart[exitingKey];
            return product;
        })
        setCart(previousCart);
    }, []);

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    const handleOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder();
        // console.log("Order Place")
    }

    let confirmOrderd;
    if(orderPlaced) {
        confirmOrderd = <img src={OrderPlacedImg} alt="" />
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem product={pd} removeProduct={removeProduct} key={pd.key}></ReviewItem>)
                }
                { confirmOrderd }
            </div>
            <div className="cart-container">
                <Cart cart={ cart }>
                    <button onClick={handleOrder} className="product-details-btn">Order Place</button>
                </Cart>
            </div>
        </div>
    );
};
export default Review;