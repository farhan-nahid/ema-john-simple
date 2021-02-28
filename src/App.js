import React from 'react';
import './App.css';
import Cart from './Component/Cart/Cart';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Products from './Component/Products/Products';

function App() {
 

  return (
    <>
     <Header></Header>
     <Products></Products>
     <Cart></Cart>
      <Footer></Footer>
    </>
  );
}

export default App;
