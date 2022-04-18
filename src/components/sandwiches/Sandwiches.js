import React from 'react';

import './Sandwiches.css';
import './modal.css';

export default function Sandwiches() {
  return (
    <div class="sandContainer">
      <section>
        <h1>Sassy's Specialty Sandwiches</h1>
        <p class="center">Click to view</p>
      </section>

      <section class="specialtyNav section">
        <h2 onclick="specialtyDrop()">- Specialty Sandwiches -</h2>
        <p>The customer's favorites!</p>
        <div id="specialNav" class="show hiddenAnimation">
          <div class="itemCard" id="brooklynChop">
            <div class="cardDes">
              <div class="cardHeader">
                <h3>- Brooklyn Chop -</h3>
              </div>
              <p>
                Chopped Angus Beef, Applewood Smoked Bacon, Vermont Cheddar
                Cheese, American Cheese, Sauteed Onions, Shredded Lettuce,
                Sliced Ripe Tomato, honey BBQ, served on toasted Italian Hero.
              </p>
            </div>
            <div class="cardImgCon">
              <img src="../images/BrooklynChop2.jpg" alt="" class="cardImg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
