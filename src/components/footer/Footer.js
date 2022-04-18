import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <div>
      <footer class="endNav">
        <div class="footer">
          <p>&copy; 2022</p>
        </div>
        <div class="footer">
          <ul>
            <li>
              <h3>Sassy's Specialty Sandwiches</h3>
            </li>
            <li>233 S 4th St Brooklyn, Ny 11211</li>
          </ul>
        </div>
        <div class="footer">
          <a href="#" class="fa">
            <img src="../images/facebook.png" alt="" />
          </a>
          <a href="#" class="fa">
            <img src="../images/yelp.png" alt="" class="" />
          </a>
        </div>
      </footer>
    </div>
  );
}
