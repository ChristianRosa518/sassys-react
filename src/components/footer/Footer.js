import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <div>
      <footer className="endNav">
        <div className="footer">
          <p>&copy; 2022</p>
        </div>
        <div className="footer">
          <ul>
            <li>
              <h3>Sassy's Specialty Sandwiches</h3>
            </li>
            <li>233 S 4th St Brooklyn, Ny 11211</li>
          </ul>
        </div>
        <div className="footer">
          <a href="#" className="fa">
            <img src="../images/facebook.png" alt="" />
          </a>
          <a href="#" className="fa">
            <img src="../images/yelp.png" alt="" className="" />
          </a>
        </div>
      </footer>
    </div>
  );
}
