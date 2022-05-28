import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

import Map from './components/location/Map';
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
  const [location, SetLocation] = useState('');

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
        SetLocation={SetLocation}
        SetShowCart={SetShowCart}
        SetProduct={SetProduct}
        SetPrice={SetPrice}
        location={location}
        showCart={showCart}
        product={product}
        price={price}
      />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              price={price}
              product={product}
              SetProduct={SetProduct}
              SetPrice={SetPrice}
              SetShowCart={SetShowCart}
            />
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/location" element={<Location />}></Route>
        {/* <Route
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
        ></Route> */}
      </Routes>
      <Footer />
      <div className="none">
        <Wrapper apiKey={'AIzaSyAyQo5E9RoTnz7324q_pqNjjxInO6liZho'}>
          <Map style={{ height: '100%', width: '100%' }}></Map>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
