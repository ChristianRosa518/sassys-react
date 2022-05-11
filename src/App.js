import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Location from './components/location/Location';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Sandwiches from './components/sandwiches/Sandwiches';
import Cart from './components/navbar/Cart';

function App() {
  const [showCart, SetShowCart] = useState(false);
  const [product, SetProduct] = useState([]);
  const [price, SetPrice] = useState([]);

  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  }

  window.addEventListener('resize', appHeight);
  appHeight();

  return (
    <Router basename="/sassys-react">
      <Navbar showCart={showCart} SetShowCart={SetShowCart} />
      <Cart
        showCart={showCart}
        SetShowCart={SetShowCart}
        product={product}
        price={price}
      />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route
          path="/sandwiches"
          element={
            <Sandwiches
              price={price}
              product={product}
              SetProduct={SetProduct}
              SetPrice={SetPrice}
              SetShowCart={SetShowCart}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
