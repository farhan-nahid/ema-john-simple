import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    const product = props.product
    return (
        <div className="single-items bg-danger shadow-lg d-flex">
            <div>
            <img src={product.img} alt=""/>
            </div>
            
            <div className="single-items-content">
            <h6>Category: {product.category}</h6>
            <h6>Prize : ${product.price}</h6>
           <h6>Stock : {product.stock}</h6>
                <h6>Total Stat : {product.starCount}</h6>
           <button className="btn btn-success mt-2">Remove This Item</button>
            </div>
               
        </div>
    );
};

export default CartItem;