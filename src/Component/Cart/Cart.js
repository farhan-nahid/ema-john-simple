import React from 'react';



const Cart = ({cart}) => {
   // console.log({cart});
    const total = cart.reduce((acc, curr) => acc + curr.price, 0)
    return (
        <aside className="sidebar col-md-4 ps-5">
        <p>Item Cart in cart ({cart.length})</p>
        <ul className="list-group my-4">
            {
                cart.map((product)=> <li key={product.key}>{product.category} </li>)
            }

        
        </ul>
        <div className="d-grid">
            <button className="btn btn-outline-success">Checkout - {total}$</button>
        </div>
    </aside>
    );
};

export default Cart;
//<li key={product.key}>{product.category} </li>
//<li>{product.category} </li>
// console.log(product.category)