import React, { useState } from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
   const{name , img, price}=props.product;
    const [isClicked , setIsClicked]=useState(false)
   
    return (
            <div className="single-product col-lg-4  text-center">
            <div className="card h-100 border-0 shadow-lg">
                <div>
                <img className="justify-content-center" src={img} alt="..." />
                </div>
                <div className="card-body">
                    <h6 className="card-text">{name}</h6>
                    <h3 className="card-text">${price}</h3>
                    <div className="card-footer border-0  d-grid">
                        <button   disabled={isClicked} onClick={() =>  {
                        props.addToCartHandler(props.product)
                        setIsClicked(true) 
                     }}
                        
                        className="btn btn-outline-warning">
                            {isClicked ? "✓ Already added to cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;