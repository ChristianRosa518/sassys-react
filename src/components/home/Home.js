import React, { useState } from 'react';

import Grid from './Grid';
import Sandwiches from '../sandwiches/Sandwiches';
import Location from '../location/Location';

import './css/container.css';

export default function Home(props) {
  const [HeroOne, setHeroOne] = useState(true);
  const [HeroTwo, setHeroTwo] = useState(false);
  const [HeroThree, setHeroThree] = useState(false);
  const [HeroFour, setHeroFour] = useState(false);

  return (
    <div>
      <div className="homeContainer" ref={props.homeScroll} id={'home'}>
        <div className="img_container" id="container_1">
          <img
            src={process.env.PUBLIC_URL + 'images/Home1.jpg'}
            alt="Sandwich"
            className={`main_img_block ${HeroOne ? 'active' : ''}`}
          />
        </div>
        <div className="img_container">
          <img
            src={process.env.PUBLIC_URL + 'images/Home2.jpg'}
            alt="Sandwich"
            className={`img_block ${HeroTwo ? 'active' : ''}`}
          />
        </div>
        <div className="img_container">
          <img
            src={process.env.PUBLIC_URL + 'images/Home3.jpg'}
            alt="Sandwich"
            className={`img_block ${HeroThree ? 'active' : ''}`}
          />
        </div>
        <div className="img_container">
          <img
            src={process.env.PUBLIC_URL + 'images/Home4.jpg'}
            alt="Sandwich"
            className={`img_block ${HeroFour ? 'active' : ''}`}
          />
        </div>
        <div className="nav">
          <div className="nav_container">
            <h1>
              <span
                className="homeTitle"
                onMouseEnter={() => {
                  setHeroOne(!HeroOne);
                  setHeroTwo(!HeroTwo);
                }}
                onMouseLeave={() => {
                  setHeroOne(true);
                  setHeroTwo(!HeroTwo);
                }}
              >
                Sassy's
              </span>

              <span
                className="homeTitle"
                onMouseEnter={() => {
                  setHeroOne(!HeroOne);
                  setHeroThree(!HeroThree);
                }}
                onMouseLeave={() => {
                  setHeroOne(true);
                  setHeroThree(!HeroThree);
                }}
              >
                Specialty
              </span>

              <span
                className="homeTitle"
                onMouseEnter={() => {
                  setHeroOne(!HeroOne);
                  setHeroFour(!HeroFour);
                }}
                onMouseLeave={() => {
                  setHeroOne(true);
                  setHeroFour(!HeroFour);
                }}
              >
                Sandwiches
              </span>
            </h1>
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
        sandwichesScroll={props.sandwichesScroll}
      />
      <Location locationScroll={props.locationScroll} />
    </div>
  );
}
