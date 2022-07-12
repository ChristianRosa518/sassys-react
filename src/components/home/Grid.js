import React, { useState } from 'react';
import { SandwichModal } from '../sandwiches/Sandwiches';

import Sassinator from '../../images/Sassinator.jpg';
import Container3 from '../../images/BrooklynChop.jpg';
import baconStack from '../../images/baconStack.jpg';
import sandwich5 from '../../images/5.jpg';
import goudaMeal from '../../images/gouda.png';
import macNChicken from '../../images/macnChicken.png';
import macNBurger from '../../images/macburger.png';

export default function Grid(props) {
  const [gridData, setGridData] = useState('');
  const [gridOpen, setGridOpen] = useState(false);

  return (
    <>
      <SandwichModal
        price={props.price}
        SetPrice={props.SetPrice}
        SetProduct={props.SetProduct}
        product={props.product}
        SetShowCart={props.SetShowCart}
        modalData={gridData}
        open={gridOpen}
        setOpen={setGridOpen}
      />
      <div className="grid_container">
        <div className="signature_sandwiches">
          <h1>Signature Sandwiches</h1>
        </div>
        <div className="grid">
          <LargeGrid
            picture={Container3}
            title={'Brooklyn Chop'}
            item={'item_1'}
            setGridData={setGridData}
            setGridOpen={setGridOpen}
            SandwichPicture={Container3}
            SandwichName={'Brooklyn Chop'}
            Price={14.95}
            Description={
              'Chopped Angus Beef, Applewood Smoked Bacon, Vermont Cheddar Cheese, American Cheese, Sauteed Onions, Shredded Lettuce, Sliced Ripe Tomato, honey BBQ, served on toasted Italian Hero.'
            }
          />
          <SmallGrid
            picture={Sassinator}
            title={'The Sassinator'}
            item={'item_2'}
            setGridData={setGridData}
            setGridOpen={setGridOpen}
            SandwichPicture={Sassinator}
            SandwichName={`The "Sassinator`}
            Price={13.95}
            Description={`Philly Steak, 100% Angus Beef Burger, Crispy Bacon, Caramelized Red
      Onions, Swiss cheese, peppercorn aioli on a toasted Brioche Bun`}
          />
          <SmallGrid
            picture={baconStack}
            title={'Bacon Stack'}
            item={'item_3'}
            setGridData={setGridData}
            setGridOpen={setGridOpen}
            SandwichPicture={baconStack}
            SandwichName={'Bacon Stack'}
            Price={13.95}
            Description={`Double Cheesburger WIth Cheddar and Mozzarella Cheese, Stacked
    with Crispy Bacon, Topped off with Caramelized Onions & Chipotle
    Mayo Aioli`}
          />
          <LargeGrid
            picture={sandwich5}
            title={'Grilled Balsamic Chicken W/ Mozzarella & Bacon'}
            item={'item_4'}
            setGridData={setGridData}
            setGridOpen={setGridOpen}
            SandwichPicture={sandwich5}
            SandwichName={'Grilled Balsamic Chicken W/ Mozzarella & Bacon'}
            Price={12.95}
            Description={
              'Grilled Chicken Breast Topped With Melted Mozzarella Cheese, Avocado, Smoked Bacon, Caramelized Onions, Leafy Lettuce, Sassy’s Chipotle Mayo Aioli'
            }
          />
          <SmallGrid
            picture={goudaMeal}
            title={'Gouda Meal'}
            item={'item_5'}
            setGridData={setGridData}
            setGridOpen={setGridOpen}
            SandwichPicture={goudaMeal}
            SandwichName={'Gouda Meal'}
            Price={12.95}
            Description={`Crispy Chicken Cutlet, Chipotle gouda, Smoked Bacon, Lettuce, Tomato, topped off with Ketchup, & Ranch.
              We all agreed that it was a good meal. A really "Gouda Meal"!`}
          />
          <SmallGrid
            picture={macNChicken}
            title={`Mac N' Chicken`}
            item={'item_6'}
            setGridData={setGridData}
            setGridOpen={setGridOpen}
            SandwichPicture={macNChicken}
            SandwichName={`Mac N' Chicken`}
            Price={13.95}
            Description={`Crispy Chicken Cutlet topped with Melted Cheddar, Cheddar Mac and Cheese, Crispy Bacon, and Sassy's Chipotle Mayo Aioli. Served on a Toasted Broiche Bun.`}
          />
          <SmallGrid
            picture={macNBurger}
            title={'Mac N Cheese Beef Burger'}
            item={'item_7'}
            setGridData={setGridData}
            setGridOpen={setGridOpen}
            SandwichPicture={macNBurger}
            SandwichName={'Mac N Cheese Beef Burger'}
            Price={12.95}
            Description={
              'Cheddar burger topped with our creamy mac n cheese, bacon, sauteed onions, and BBQ sauce'
            }
          />
        </div>
      </div>
    </>
  );
}

function LargeGrid(props) {
  function sendModalData() {
    const modal = {
      title: props.SandwichName,
      description: props.Description,
      picture: props.SandwichPicture,
      price: props.Price,
    };
    props.setGridData(modal);
    props.setGridOpen(true);
  }

  return (
    <div
      className={`large_item_container ${props.item}`}
      onClick={sendModalData}
    >
      <div className="largeTopFlexbox">
        <div className="largeTitleFlex">
          <p>{props.title}</p>
        </div>
      </div>
      <div>
        <img src={props.picture} alt="" className="large_item_img" />
      </div>
      <div className="largeBottomFlexbox"></div>
    </div>
  );
}
function SmallGrid(props) {
  function sendModalData() {
    const modal = {
      title: props.SandwichName,
      description: props.Description,
      picture: props.SandwichPicture,
      price: props.Price,
    };
    props.setGridData(modal);
    props.setGridOpen(true);
  }
  return (
    <div className={`item_container ${props.item}`} onClick={sendModalData}>
      <div className="start_flexbox">
        <div className="title_flexbox">
          <p>{props.title}</p>
        </div>
      </div>
      <div>
        <img src={props.picture} alt="" className="item_img" />
      </div>
      <div className="end_flexbox"></div>
    </div>
  );
}
