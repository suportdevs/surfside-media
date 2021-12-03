import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';

const ProductDetail = () => {
    const {productkey} = useParams();
    const [productDetail, setProductDetail] = useState([]);

    useEffect( () => {
        const singleProduct = fakeData.find(pd => pd.key === productkey)
        setProductDetail(singleProduct);
    },[]);

    return (
        <div className="product-left-container">
            <div className="product-img">
                <img src={ productDetail.img } alt="" />
            </div>
            <div className="product-details">
                <h3>{ productDetail.name }</h3>
                <p>by: { productDetail.seller }</p>
                <p>$ { productDetail.price }</p>
                <p>Only { productDetail.stock } left stock - order soon</p>
                
                {/* <button className="product-details-btn" onClick={ () => props.handleAddProduct(props.product) }><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button> */}
            </div>
        </div>
    );
};

export default ProductDetail;