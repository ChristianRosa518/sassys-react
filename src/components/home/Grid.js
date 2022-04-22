import React from 'react';

import Sassinator from '../images/Sassinator.jpg';
import Container3 from '../images/BrooklynChop.jpg';

export default function Grid() {
  return (
    <div className="grid_container">
      <div className="signature_sandwiches">
        <h1>Signature Sandwiches</h1>
      </div>
      <div className="grid">
        <div className="large_item_container item_1">
          <div className="largeTopFlexbox">
            <div className="largeTitleFlex">
              <p>Brooklyn Chop</p>
            </div>
          </div>
          <div>
            <img src={Container3} alt="" class="large_item_img" />
          </div>
          <div className="largeBottomFlexbox"></div>
        </div>
        <div className="item_container item_2">
          <div className="start_flexbox">
            <div className="title_flexbox">
              <p>The Sassinator</p>
            </div>
          </div>
          <div>
            <img src={Sassinator} alt="" className="item_img" />
          </div>
          <div className="end_flexbox"></div>
        </div>
        <div className="item_container item_3">
          <div className="start_flexbox">
            <div className="title_flexbox">
              <p>Bacon Stack</p>
            </div>
          </div>
          <div>
            <img src="./images/baconStack.jpg" alt="" className="item_img" />
          </div>
          <div className="end_flexbox"></div>
        </div>
        <div className="large_item_container item_4">
          <div className="largeTopFlexbox">
            <div className="largeTitleFlex">
              <p>Grilled Balsamic Chicken Sandwich</p>
            </div>
          </div>
          <div>
            <img src="./images/5.jpg" alt="" className="large_item_img" />
          </div>
          <div className="largeBottomFlexbox"></div>
        </div>
        <div className="item_container item_5">
          <div className="start_flexbox">
            <div className="title_flexbox">
              <p>Gouda Meal</p>
            </div>
          </div>
          <div>
            <img src="./images/gouda.png" alt="" className="item_img" />
          </div>
          <div className="end_flexbox"></div>
        </div>
        <div className="item_container item_6">
          <div className="start_flexbox">
            <div className="title_flexbox">
              <p>Mac N' Chicken</p>
            </div>
          </div>
          <div>
            <img src="./images/macnChicken.png" alt="" className="item_img" />
          </div>
          <div className="end_flexbox"></div>
        </div>
        <div className="item_container item_7">
          <div className="start_flexbox">
            <div className="title_flexbox">
              <p>Mac N Cheese Beef Burger</p>
            </div>
          </div>
          <div>
            <img src="./images/macburger.png" alt="" className="item_img" />
          </div>
          <div className="end_flexbox"></div>
        </div>
      </div>
    </div>
  );
}
