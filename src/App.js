import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Wrapper } from '@googlemaps/react-wrapper';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Map from './components/location/Map';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Location from './components/location/Location';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
// import Cart from '../hide/checkout/Cart';
// import Confirmed from '../hide/checkout/PaymentConfirmed';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISH_KEY);

function App() {
  const [clientSecret, setClientSecret] = useState('');
  const [payment, setPayment] = useState('');
  const [showCart, SetShowCart] = useState(false);
  const [product, SetProduct] = useState([]);
  const [price, SetPrice] = useState('$0.00');
  const [location, SetLocation] = useState('');

  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
  }

  function setData(data) {
    setClientSecret(data.clientSecret);
    setPayment(data.paymentIntent);
  }

  useEffect(() => {
    appHeight();

    fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: 'soup' }),
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  window.addEventListener('resize', appHeight);

  const stripeOptions = {
    clientSecret,
  };

  return (
    <Router basename="/">
      <Navbar showCart={showCart} SetShowCart={SetShowCart} />
      <Elements options={stripeOptions} stripe={stripePromise}>
        {/* <Cart
          SetLocation={SetLocation}
          SetShowCart={SetShowCart}
          SetProduct={SetProduct}
          SetPrice={SetPrice}
          location={location}
          showCart={showCart}
          product={product}
          price={price}
          payment={payment}
        /> */}
      </Elements>
      <Routes>
        {/* <Route path={'/confirmed'} element={<Confirmed />}></Route> */}
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
        <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS}>
          <Map style={{ height: '100%', width: '100%' }}></Map>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
