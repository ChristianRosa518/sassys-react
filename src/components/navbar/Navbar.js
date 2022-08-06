import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Scrollspy from 'react-scrollspy';

import './Burger.css';
import './Navbar.css';

import StoreLogo from '../../images/logo.png';

export default function Navbar(props) {
  const [open, setOpen] = useState('');

  const ids = [
    { name: 'Sandwiches', function: props.sandwichesScroll },
    { name: 'Location', function: props.locationScroll },
    { name: 'Contact', function: props.contactScroll },
  ];

  function changeCartState() {
    const current = props.showCart;
    props.SetShowCart(!current);
  }

  function changeOpen(e) {
    e.stopPropagation();
    const body = document.querySelector('body');
    if (body.style.overflow === 'hidden') {
      body.style.overflow = 'auto';
    } else {
      body.style.overflow = 'hidden';
    }
    const current = open;
    setOpen(!current);
  }

  function doScroll(e) {
    e.current?.scrollIntoView({ behavior: 'instant' });
  }

  function doScrollMobile(e) {
    const body = document.querySelector('body');
    e.current?.scrollIntoView({ behavior: 'instant' });
    const current = open;
    setOpen(!current);
    body.style.overflow = 'auto';
  }

  return (
    <header>
      <div className="logo-flex">
        <div className="logoBackground">
          <Link to="/">
            <img
              src={StoreLogo}
              className="logo"
              alt="#"
              onClick={() => doScroll(props.homeScroll)}
            />
          </Link>
        </div>
      </div>
      <nav className="desktopNav">
        <ul className="navlinks">
          <li>
            <FaShoppingCart className="cartDesktop" onClick={changeCartState} />
          </li>
          <Scrollspy
            items={['sandwiches', 'location']}
            currentClassName={'navActive'}
            offset={-100}
          >
            {ids.map((e) => (
              <li key={e.name} onClick={() => doScroll(e.function)}>
                {e.name}
              </li>
            ))}
          </Scrollspy>
        </ul>
      </nav>
      <div className={`mobileNav`}>
        <FaShoppingCart className="mobileCart" onClick={changeCartState} />
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
                onClick={() => doScrollMobile(props.homeScroll)}
                className="listItem"
                key={'List3'}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
              >
                Home
              </motion.li>
              <motion.li
                onClick={() => doScrollMobile(props.sandwichesScroll)}
                className="listItem"
                key={'List3'}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
              >
                Sandwiches
              </motion.li>
              <motion.li
                onClick={() => doScrollMobile(props.locationScroll)}
                className="listItem"
                key={'List4'}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
              >
                Location
              </motion.li>
              <motion.li
                onClick={() => doScrollMobile(props.contactScroll)}
                className="listItem"
                key={'List1'}
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                exit={{ opacity: 0, y: -40, transition: { delay: 0 } }}
              >
                Contact
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
