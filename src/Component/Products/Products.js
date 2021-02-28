import React from 'react';
import products from '../../fakeData';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
   // console.log(products);
    return (
    
        <section className="products col-md-8 border-end">
            <div className="row row-cols-3 gx-5 gy-5">
                
                    {
                        products.map(product => <Product key={product.key} product={product}></Product>)
                    }
                    
            </div>
       </section>
      
    );
};

export default Products;