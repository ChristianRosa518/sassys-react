import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';

import './cart.css';
import './Checkout.css';
import Checkout from './Checkout';
import emailjs from 'emailjs-com';
import Blank from '../../images/Blank.PNG';

const API_KEY = process.env.REACT_APP_GEOCODE;

export default function Cart(props) {
  const [verifyLoc, SetVerifyLoc] = useState(false);
  const [viewItems, SetViewItems] = useState(true);
  // const [showCheckout, SetShowCheckout] = useState(false);
  //   if (!props.showCart) return null;
  // comments

  function changeCartState() {
    const current = props.showCart;
    props.SetShowCart(!current);
    SetViewItems(true);
    SetVerifyLoc(false);
    // SetShowCheckout(false);
  }

  function openCheckout(e) {
    e.stopPropagation();

    if (props.product.length === 0) {
      console.log('cart is empty.');
    } else {
      const current = verifyLoc;
      const currentItems = viewItems;
      SetVerifyLoc(!current);
      SetViewItems(!currentItems);

      fetch('/update-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          price: props.price,
          info: props.payment,
        }),
      });
    }
  }

  function closeCheckout(e) {
    const current = verifyLoc;
    const currentItems = viewItems;
    SetVerifyLoc(!current);
    SetViewItems(!currentItems);
  }

  function dummyfunction(e) {
    e.stopPropagation();
  }

  function taxPrice(num) {
    let value = num;
    value = value.slice(1).replace('.', '');
    value = parseInt(value);
    value = value * 0.0008875;
    let dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let amount = dollarUS.format(value);
    return amount;
  }
  function totalPrice(num) {
    let value = num;
    value = value.slice(1).replace('.', '');
    value = parseInt(value);
    value = value * 0.0108875;
    let dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let amount = dollarUS.format(value);
    return amount;
  }

  const ModalBgAnimate = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { delay: 0.1 } },
  };

  const CartAnimate = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, transition: { delay: 0.1 } },
  };

  return (
    <AnimatePresence>
      {props.showCart && (
        <motion.div
          key={'CartBG'}
          variants={ModalBgAnimate}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          className="cartContainer"
          onClick={changeCartState}
        >
          {viewItems && (
            <motion.div
              key={'Cart'}
              variants={CartAnimate}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
              className={'cart'}
              onClick={dummyfunction}
            >
              {props.product.length === 0 && (
                <div className="cart_Empty">
                  <h2>Cart is empty</h2>
                  <p></p>
                </div>
              )}
              <div className="cartItems">
                {props.product.map((item) => {
                  return (
                    <Product
                      product={props.product}
                      SetPrice={props.SetPrice}
                      SetProduct={props.SetProduct}
                      item={item}
                      key={item.id}
                      itemKey={item.id}
                    />
                  );
                })}
              </div>
              <div className="cartCheckout">
                <span
                  className="closeButtonCartItem_cartCheckout"
                  onClick={changeCartState}
                >
                  &times;
                </span>
                <div className="cartOrderContainer">
                  <button className="cartOrder" onClick={openCheckout}>
                    Order
                  </button>
                </div>
                <div className="cartTotal">
                  <div className="cartTotalInfo">
                    <h3>Subtotal:</h3>
                    <p>{props.price}</p>
                  </div>
                  <div className="cartTotalInfo">
                    <h3>Tax:</h3>
                    <p>{taxPrice(props.price)}</p>
                  </div>

                  <div className="cartTotalInfo">
                    <h3>Total:</h3>
                    <p>{totalPrice(props.price)}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {verifyLoc && (
            <LocationChecker
              price={props.price}
              product={props.product}
              location={props.location}
              dummyfunction={dummyfunction}
              closeCheckout={closeCheckout}
              SetProduct={props.SetProduct}
              clientSecret={props.clientSecret}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
    this.formatPrice = this.formatPrice.bind(this);
  }

  formatPrice(price) {
    let dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let amount = dollarUS.format(price);
    return amount;
  }

  removeItem() {
    const id = this.props.itemKey;
    var array = this.props.product;
    array = array.filter((obj) => {
      return obj.id !== id;
    });
    const sum = array.reduce(function (a, b) {
      return a + b.price;
    }, 0);
    let dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let price = dollarUS.format(sum);
    this.props.SetProduct(array);
    this.props.SetPrice(price);
  }
  breadType() {
    var bread = this.props.item.toppings[1];
    return bread;
  }
  render() {
    return (
      <div className={'productContainer'}>
        <div className="productDesContainer">
          <div className="productTitleCon">
            <h3>-{this.props.item.title}-</h3>
            <h4>{this.formatPrice(this.props.item.price)}</h4>
          </div>
          <div className="productDes">
            {this.props.item.picture === Blank ? (
              <div className={'productDes_Blank'}>
                <span
                  className="closeButtonCartItem_Blank"
                  onClick={this.removeItem}
                >
                  &times;
                </span>
              </div>
            ) : (
              ''
            )}

            <p className="productTraits">
              - {this.props.item.bread === '' ? '' : this.props.item.bread}
            </p>
            <p className="productTraits">
              {this.props.item.adds === '' ? '' : `- ${this.props.item.adds}`}
            </p>
            <p className="productTraits">
              {this.props.item.instructions === ''
                ? ''
                : `- ${this.props.item.instructions}`}
            </p>
            <p className="productInfo">{this.props.item.description}</p>
          </div>
        </div>
        {this.props.item.picture === Blank ? (
          ''
        ) : (
          <div className="productImageContainer">
            <img
              className="productImage"
              src={this.props.item.picture}
              alt="sandwichImage"
            />
            <span className="closeButtonCartItem" onClick={this.removeItem}>
              &times;
            </span>
          </div>
        )}
      </div>
    );
  }
}

function LocationChecker(props) {
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [delivery, setDelivery] = useState('pickup');

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const template = {};
  const productinformation = props.product;

  function geocode(e) {
    e.preventDefault();
    axios
      .get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: address + city + zip,
          key: API_KEY,
        },
      })
      .then((response) => {
        var local = response.data.results[0].geometry.location;
        CheckLocation(local);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  function orderInformationDelivery() {
    var Location = address + ',' + city + ',' + zip;
    Object.assign(template, { Delivery: 'Delivery' });
    Object.assign(template, { Address: Location });

    for (let i = 0; i < props.product.length; i++) {
      let value = `Order${[i]}`;
      let addons = `Toppings${[i]}`;
      let Instructions = `Instructions${[i]}`;
      Object.assign(template, { [value]: productinformation[i].title });
      Object.assign(template, { [addons]: productinformation[i].toppings });
      Object.assign(template, {
        [Instructions]: productinformation[i].instructions,
      });
    }
    emailjs
      .send(
        'service_1d6oo6u',
        'template_tqxgooo',
        template,
        'F7eoeUPRLaGd4Yx7q'
      )
      .then(
        (result) => {
          console.log(result.text);
          finishedOrder();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  function finishedOrder() {
    navigate('/confirmed', { replace: true });
    window.location.reload(false);
  }
  function CheckLocation(local) {
    const position = new google.maps.LatLng(local.lat, local.lng);

    const coordsMap: google.maps.LatLngLiteral[] = [
      { lat: 40.698368338470225, lng: -73.98564910894787 },
      { lat: 40.69866554506028, lng: -73.9568281173706 },
      { lat: 40.70428236757431, lng: -73.9481162817999 },
      { lat: 40.71193901146775, lng: -73.94047737121582 },
      { lat: 40.7304783951045, lng: -73.95150661468506 },
      { lat: 40.73586254432281, lng: -73.95508495006308 },
      { lat: 40.72955373901099, lng: -73.95920482310996 },
    ];
    const deliveryRadius = new google.maps.Polygon({
      paths: coordsMap,
    });
    if (
      google.maps.geometry.poly.containsLocation(position, deliveryRadius) ===
      true
    ) {
      stripe
        .confirmPayment({
          elements,

          redirect: 'if_required',
        })
        .then(function (result) {
          if (result.error) {
            console.log('failed');
          } else {
            console.log('success');
            orderInformationDelivery();
          }
        });
    } else {
      alert("Address isn't in delivery Radius");
    }
  }

  function handleCheckboxChange(e) {
    setDelivery(e.target.value);
  }
  return (
    <div className="checkout_Container">
      <div className="checkout" onClick={props.dummyfunction}>
        <div className="checkout_Header">
          <h3>
            <strong>Checkout</strong>
          </h3>
          <span className="checkout_CloseButton" onClick={props.closeCheckout}>
            &times;
          </span>
        </div>
        <div className="checkout_Location_Container">
          <div>
            <div className="checkout_Label_Container">
              <div className="checkout_Label">
                <label>
                  Pickup
                  <span
                    className={`${
                      delivery === 'pickup' ? 'checkout_Label_SpanClicked' : ''
                    }`}
                  />
                  <input
                    type="radio"
                    value="pickup"
                    checked={delivery === 'pickup'}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
              <div className="checkout_Label">
                <label>
                  Delivery
                  <input
                    type="radio"
                    value="delivery"
                    checked={delivery === 'delivery'}
                    onChange={handleCheckboxChange}
                  />
                  <span
                    className={`${
                      delivery === 'delivery'
                        ? 'checkout_Label_SpanClicked'
                        : ''
                    }`}
                  />
                </label>
              </div>
            </div>
            {delivery === 'delivery' && (
              <div className={'checkout_Delivery'}>
                <h2>Please enter your delivery address</h2>
                <label>
                  Address
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    name="Address"
                  />
                </label>
                <label>
                  Zip
                  <input
                    type="text"
                    name="Zipcode"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                  />
                </label>
                <label>
                  City
                  <input
                    type="text"
                    name="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </label>
              </div>
            )}
          </div>
          <Checkout
            delivery={delivery}
            geocode={geocode}
            product={props.product}
            price={props.price}
            clientSecret={props.clientSecret}
          ></Checkout>
        </div>
      </div>
      <div></div>
    </div>
  );
}
