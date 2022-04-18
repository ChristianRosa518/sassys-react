import React from 'react';

import Sassinator from '../images/Sassinator.jpg';
import Container3 from '../images/BrooklynChop.jpg';

export default function Grid() {
  return (
    <div class="grid_container">
      <div class="signature_sandwiches">
        <h1>Signature Sandwiches</h1>
      </div>
      <div class="grid">
        <div class="large_item_container item_1">
          <div class="largeTopFlexbox">
            <div class="largeTitleFlex">
              <p>Brooklyn Chop</p>
            </div>
          </div>
          <div>
            <img src={Container3} alt="" class="large_item_img" />
          </div>
          <div class="largeBottomFlexbox"></div>
        </div>
        <div class="item_container item_2">
          <div class="start_flexbox">
            <div class="title_flexbox">
              <p>The Sassinator</p>
            </div>
          </div>
          <div>
            <img src={Sassinator} alt="" class="item_img" />
          </div>
          <div class="end_flexbox"></div>
        </div>
        <div class="item_container item_3">
          <div class="start_flexbox">
            <div class="title_flexbox">
              <p>Bacon Stack</p>
            </div>
          </div>
          <div>
            <img src="./images/baconStack.jpg" alt="" class="item_img" />
          </div>
          <div class="end_flexbox"></div>
        </div>
        <div class="large_item_container item_4">
          <div class="largeTopFlexbox">
            <div class="largeTitleFlex">
              <p>Grilled Balsamic Chicken Sandwich</p>
            </div>
          </div>
          <div>
            <img src="./images/5.jpg" alt="" class="large_item_img" />
          </div>
          <div class="largeBottomFlexbox"></div>
        </div>
        <div class="item_container item_5">
          <div class="start_flexbox">
            <div class="title_flexbox">
              <p>Gouda Meal</p>
            </div>
          </div>
          <div>
            <img src="./images/gouda.png" alt="" class="item_img" />
          </div>
          <div class="end_flexbox"></div>
        </div>
        <div class="item_container item_6">
          <div class="start_flexbox">
            <div class="title_flexbox">
              <p>Mac N' Chicken</p>
            </div>
          </div>
          <div>
            <img src="./images/macnChicken.png" alt="" class="item_img" />
          </div>
          <div class="end_flexbox"></div>
        </div>
        <div class="item_container item_7">
          <div class="start_flexbox">
            <div class="title_flexbox">
              <p>Mac N Cheese Beef Burger</p>
            </div>
          </div>
          <div>
            <img src="./images/macburger.png" alt="" class="item_img" />
          </div>
          <div class="end_flexbox"></div>
        </div>
      </div>
    </div>
  );
}
