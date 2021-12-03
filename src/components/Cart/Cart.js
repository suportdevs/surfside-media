import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prdt) => total + prdt.price, 0);
    let total = 0;
    
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        // before_price = product.price;
        total = total + product.price * product.quantity;
    }
    let new_price = 0;
    for(let i = 0; i < cart.length; i++) {
        const product = cart[i];
        new_price = product.price;
    }

    let shipping = 0;
    if(total > 35) {
        shipping = 0;
    }
    else if(total > 15) {
        shipping = 6.99;
    }
    else if(total > 0) {
        shipping = 15;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    return (
        <div className="cart-details">
            <h2>Cart Summary</h2>
            <p>Items Ordered: <span style={{float:'right', marginLeft: '10px'}}>{ cart.length }</span></p>
            <p>Before item Price: <span style={{float:'right', marginLeft: '10px'}}>{ formatNumber(total - new_price) }</span></p>
            <p>New item Price: <span style={{float:'right', marginLeft: '10px'}}> { formatNumber(new_price) }</span></p>
            <p>Shipping Cost: <span style={{float:'right', marginLeft: '10px'}}> { shipping }</span></p>
            <p>Tax + Vat: <span style={{float:'right', marginLeft: '10px'}}> { tax }</span></p>
            
            <hr />
            <p>Total Price: <span style={{float:'right', marginLeft: '10px'}}>{ grandTotal }</span></p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;