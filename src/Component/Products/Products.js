import React from 'react';
import products from '../../fakeData';
import Product from '../Product/Product';
import './Products.css';


const Products = (props) => {
 //   console.log(props);
    return (
    
        <section className="products col-md-8 ">
            <div className="row row-cols-3 gx-5 gy-3">
                
                    {
                        products.map(product => <Product addToCartHandler={props.addToCartHandler} key={product.key} product={product}></Product>)
                    }
                    
            </div>
       </section>
      
    );
};

export default Products;