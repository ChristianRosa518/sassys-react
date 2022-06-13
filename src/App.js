import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Map from './components/location/Map';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Location from './components/location/Location';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Cart from './components/checkout/Cart';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISH_KEY);

function App() {
  const [clientSecret, setClientSecret] = useState('abc');
  const [showCart, SetShowCart] = useState(false);
  const [product, SetProduct] = useState([]);
  const [price, SetPrice] = useState([]);
  const [location, SetLocation] = useState('');

  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  }
  useEffect(() => {
    appHeight();

    fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  });

  window.addEventListener('resize', appHeight);
  const options = {
    clientSecret,
  };

  return (
    <Router basename="/sassys-react">
      <Navbar showCart={showCart} SetShowCart={SetShowCart} />
      <Elements options={options} stripe={stripePromise}>
        <Cart
          SetLocation={SetLocation}
          SetShowCart={SetShowCart}
          SetProduct={SetProduct}
          SetPrice={SetPrice}
          location={location}
          showCart={showCart}
          product={product}
          price={price}
          clientSecret={clientSecret}
        />
      </Elements>
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
