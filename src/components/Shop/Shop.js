import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/fakedb';
import {Link} from 'react-router-dom';

const Shop = () => {
    const productCount = fakeData.slice(0, 10);
    const [products, setProducts] = useState(productCount);
    const [cart, setCart] = useState([]);

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

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pd => <Product product={pd} handleAddProduct={ handleAddProduct } key={pd.key}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={ cart }>
                    <Link to="/review">
                        <button className="product-details-btn">Order Review</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;












