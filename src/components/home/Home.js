import React, { useState } from 'react';

import Grid from './Grid';
import Sandwiches from '../sandwiches/Sandwiches';

import './css/container.css';
import './css/grid.css';
import './css/grid_items.css';

// Images
import Container1 from '../../images/3.jpg';
import Container2 from '../../images/2.jpg';
import Container3 from '../../images/BrooklynChop.jpg';
import Container4 from '../../images/4.jpg';
//

export default function Home(props) {
  const [HeroOne, setHeroOne] = useState(true);
  const [HeroTwo, setHeroTwo] = useState(false);
  const [HeroThree, setHeroThree] = useState(false);
  const [HeroFour, setHeroFour] = useState(false);

  return (
    <div>
      <div className="homeContainer">
        <div className="img_container" id="container_1">
          <img
            src={Container1}
            alt="Sandwich"
            className={`main_img_block ${HeroOne ? 'active' : ''}`}
          />
        </div>
        <div className="img_container">
          <img
            src={Container2}
            alt="Sandwich"
            className={`img_block ${HeroTwo ? 'active' : ''}`}
          />
        </div>
        <div className="img_container">
          <img
            src={Container3}
            alt="Sandwich"
            className={`img_block ${HeroThree ? 'active' : ''}`}
          />
        </div>
        <div className="img_container">
          <img
            src={Container4}
            alt="Sandwich"
            className={`img_block ${HeroFour ? 'active' : ''}`}
          />
        </div>
        <div className="nav">
          <div className="nav_container">
            <div
              onMouseEnter={() => {
                setHeroOne(!HeroOne);
                setHeroTwo(!HeroTwo);
              }}
              onMouseLeave={() => {
                setHeroOne(true);
                setHeroTwo(!HeroTwo);
              }}
            >
              <p className="homeTitle">Sassy's</p>
            </div>
            <div
              onMouseEnter={() => {
                setHeroOne(!HeroOne);
                setHeroThree(!HeroThree);
              }}
              onMouseLeave={() => {
                setHeroOne(true);
                setHeroThree(!HeroThree);
              }}
            >
              <p className="homeTitle">Specialty</p>
            </div>
            <div
              onMouseEnter={() => {
                setHeroOne(!HeroOne);
                setHeroFour(!HeroFour);
              }}
              onMouseLeave={() => {
                setHeroOne(true);
                setHeroFour(!HeroFour);
              }}
            >
              <p className="homeTitle">Sandwiches</p>
            </div>
          </div>
        </div>
      </div>
      <Grid
        price={props.price}
        product={props.product}
        SetProduct={props.SetProduct}
        SetPrice={props.SetPrice}
        SetShowCart={props.SetShowCart}
      />
      <Sandwiches
        price={props.price}
        product={props.product}
        SetProduct={props.SetProduct}
        SetPrice={props.SetPrice}
        SetShowCart={props.SetShowCart}
      />
    </div>
  );
}
