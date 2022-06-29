import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './cart.css';
import './Checkout.css';
import GoogleGeocode from '../location/Geocode';
import Checkout from './Checkout';

export default function Cart(props) {
  const [verifyLoc, SetVerifyLoc] = useState(false);
  const [viewItems, SetViewItems] = useState(true);
  // const [showCheckout, SetShowCheckout] = useState(false);
  //   if (!props.showCart) return null;

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
              className="cart"
              onClick={dummyfunction}
            >
              {props.product.length === 0 && (
                <div className="cart_Empty"> Cart is empty</div>
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
                {props.price}
                <button onClick={openCheckout}>Order</button>
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
  render() {
    return (
      <div className={'productContainer'}>
        <div className="productDesContainer">
          <div className="productTitleCon">
            <h3>-{this.props.item.title}-</h3>
            <h4>Price: {this.formatPrice(this.props.item.price)}</h4>
          </div>
          <p>{this.props.item.description}</p>
        </div>
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
      </div>
    );
  }
}

function LocationChecker(props) {
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
          <GoogleGeocode
            SetVerifyLoc={props.SetVerifyLoc}
            SetShowCheckout={props.SetShowCheckout}
          />
          <Checkout
            product={props.product}
            price={props.price}
            clientSecret={props.clientSecret}
          ></Checkout>
        </div>
        <div className="cartFooter"></div>
      </div>
      <div></div>
    </div>
  );
}
