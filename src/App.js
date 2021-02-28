import React from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Products from './Component/Products/Products';

function App() {
  const [cart, setCart] =React.useState([ ]);

  const  addToCartHandler = (product) => {
    const newCart = [...cart , product];
    setCart(newCart)
  }

  return (
    <>
     <Header></Header>
     <Products  addToCartHandler={addToCartHandler}></Products>
     <Cart cart={cart}></Cart>
      <Footer></Footer>
    </>
  );
}

export default App;
