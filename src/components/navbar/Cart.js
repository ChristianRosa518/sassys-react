import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './cart.css';

export default function Cart(props) {
  //   if (!props.showCart) return null;

  function changeCartState() {
    const current = props.showCart;
    props.SetShowCart(!current);
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
          <motion.div
            key={'Cart'}
            variants={CartAnimate}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            className="cart"
            onClick={dummyfunction}
          >
            <div className="cartItems">
              {props.product.map((item) => {
                return <Product item={item} key={item.id} />;
              })}
            </div>
            <div className="cartCheckout">{props.price}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'productContainer'}>
        <div className="productDesContainer">
          <div className="productTitleCon">
            <h3>-{this.props.item.title}-</h3>
            <h4>Price: {this.props.item.price}</h4>
          </div>
          <p>{this.props.item.description}</p>
        </div>
        <div className="productImageContainer">
          <img
            className="productImage"
            src={this.props.item.picture}
            alt="sandwichImage"
          />
        </div>
      </div>
    );
  }
}
