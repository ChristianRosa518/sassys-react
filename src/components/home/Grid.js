import React from 'react';
import { SandwichModal } from '../sandwiches/Sandwiches';

import Sassinator from '../../images/Sassinator.jpg';
import Container3 from '../../images/BrooklynChop.jpg';
import baconStack from '../../images/baconStack.jpg';
import sandwich5 from '../../images/5.jpg';
import goudaMeal from '../../images/gouda.png';
import macNChicken from '../../images/macnChicken.png';
import macNBurger from '../../images/macburger.png';

export default function Grid(props) {
  return (
    <div className="grid_container">
      {/* <SandwichModal
        // modalData={modalData}
        // open={open}
        // setOpen={setOpen}
        price={props.price}
        SetPrice={props.SetPrice}
        SetProduct={props.SetProduct}
        product={props.product}
        SetShowCart={props.SetShowCart}
      ></SandwichModal> */}
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
            <img src={Container3} alt="" className="large_item_img" />
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
            <img src={baconStack} alt="" className="item_img" />
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
            <img src={sandwich5} alt="" className="large_item_img" />
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
            <img src={goudaMeal} alt="" className="item_img" />
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
            <img src={macNChicken} alt="" className="item_img" />
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
            <img src={macNBurger} alt="" className="item_img" />
          </div>
          <div className="end_flexbox"></div>
        </div>
      </div>
    </div>
  );
}
