import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import StoreLogo from '../images/logo.png';

export default function Navbar() {
  return (
    <header>
      <div class="logo-flex">
        <div class="logoBackground">
          <Link to="/">
            <img src={StoreLogo} class="logo" alt="#" />
          </Link>
        </div>
        <a
          href="https://www.ordersassyssandwiches.com/"
          target="_blank"
          rel="noreferrer"
          class="orderButton"
        >
          <button>Order</button>
        </a>
      </div>
      <nav>
        <ul class="navlinks">
          <li>
            <Link to="">Contact</Link>
          </li>

          <li>
            <Link to="/location">Location</Link>
          </li>
          <li>
            <Link to="sandwiches">Sandwiches</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
