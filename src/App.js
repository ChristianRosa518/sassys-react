import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Wrapper } from '@googlemaps/react-wrapper';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';

import Map from './components/location/Map';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Location from './components/location/Location';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Cart from './components/checkout/Cart';
import Confirmed from './components/checkout/PaymentConfirmed';

function App() {
  require('dotenv').config();
  const [clientSecret, setClientSecret] = useState('');
  const [showCart, SetShowCart] = useState(false);
  const [product, SetProduct] = useState([]);
  const [price, SetPrice] = useState(100);
  const [location, SetLocation] = useState('');
  const stripeKey = JSON.stringify(process.env.REACT_APP_PUBLISH_KEY);
  const googleKey = JSON.stringify(process.env.REACT_APP_GOOGLE_MAPS);
  const stripePromise = loadStripe(stripeKey);

  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  }
  useEffect(() => {
    appHeight();
    console.log(stripeKey, googleKey);
  });
  window.addEventListener('resize', appHeight);

  const stripeOptions = {
    clientSecret,
  };

  return (
    <Router basename="/">
      <Navbar showCart={showCart} SetShowCart={SetShowCart} />
      <Elements options={stripeOptions} stripe={stripePromise}>
        <Cart
          setClientSecret={setClientSecret}
          SetLocation={SetLocation}
          SetShowCart={SetShowCart}
          SetProduct={SetProduct}
          SetPrice={SetPrice}
          location={location}
          showCart={showCart}
          product={product}
          price={price}
        />
      </Elements>
      <Routes>
        <Route path={'/confirmed'} element={<Confirmed />}></Route>
        <Route
          exact
          path="/"
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
      </Routes>
      <Footer />
      <div className="none">
        <Wrapper apiKey={googleKey}>
          <Map style={{ height: '100%', width: '100%' }}></Map>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
