import React from 'react';
import './Cart.css';
import CartItem from './CartItem.js/CartItem';


const Cart = ({cart}) => {
    console.log(cart);
    const total = cart.reduce((acc, curr) => acc + curr.price, 0)
    return (
        <div className="position-relative">
        <aside className="sidebar col-md-4 ps-5  position-absolute top-0 end-0 position-fixed">
        <h4 >Items in the Cart ({cart.length})</h4>
        <div className="d-grid ">
            <button className="btn btn-outline-success mb-5">Checkout - $ {total}</button>
        </div>
        <ul>
            
            {
                cart.map((product)=> <CartItem product={product}></CartItem>)
            }

        </ul>
        
    </aside>
    </div>
    );
};

export default Cart;
//<li key={product.key}>{product.category} </li>
//<li>{product.category} </li>
// console.log(product.category)