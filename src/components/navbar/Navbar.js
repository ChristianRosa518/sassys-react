import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import './Burger.css';
import './Navbar.css';

import StoreLogo from '../images/logo.png';

export default function Navbar(props) {
  const [open, setOpen] = useState('');

  function changeCartState() {
    const current = props.showCart;
    props.SetShowCart(!current);
  }

  function changeOpen(e) {
    e.stopPropagation();
    const current = open;
    setOpen(!current);
  }

  return (
    <header>
      <div className="logo-flex">
        <div className="logoBackground">
          <Link to="/">
            <img src={StoreLogo} className="logo" alt="#" />
          </Link>
        </div>
        <button className="orderButton">
          <a
            href="https://www.ordersassyssandwiches.com/"
            target="_blank"
            rel="noreferrer"
          >
            Order
          </a>
        </button>
      </div>
      <nav className="desktopNav">
        <ul className="navlinks">
          <li>
            <FaShoppingCart className="cartDesktop" onClick={changeCartState} />
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/location">Location</Link>
          </li>
          {/* <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li> */}
        </ul>
      </nav>
      <div className={`mobileNav`}>
        <FaShoppingCart className="mobileCart" />
        <div
          className={`burger_container ${open ? 'open' : ''}`}
          onClick={changeOpen}
        >
          <div className="burger_icon"></div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.ul
              className="mobileNavlinks"
              key={'Dropdown'}
              initial={{ height: 0 }}
              animate={{ height: 'calc(var(--vh, 1vh) * 100)' }}
              transition={{ duration: 0.5 }}
              exit={{ height: '0vh', transition: { duration: 0.5 } }}
            >
              <motion.li
                key={'List1'}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
              >
                <Link to="/contact" onClick={changeOpen} className="listItem">
                  Contact
                </Link>
              </motion.li>

              <motion.li
                key={'List4'}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
              >
                <Link to="/location" className="listItem" onClick={changeOpen}>
                  Location
                </Link>
              </motion.li>
              {/* <motion.li
                key={'List2'}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
              >
                <Link
                  to="/sandwiches"
                  className="listItem"
                  onClick={changeOpen}
                >
                  Sandwiches
                </Link>
              </motion.li> */}
              <motion.li
                key={'List3'}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
              >
                <a
                  onClick={changeOpen}
                  href="https://www.ordersassyssandwiches.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="listItem"
                >
                  Order
                </a>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
