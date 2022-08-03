import React, { useState } from 'react';
import { SandwichModal, BurgerSandwichModal } from '../sandwiches/Sandwiches';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './css/Grid.module.css';
import './css/GridJsx.css';

import Sassinator from '../../images/Sassinator.jpg';
import Container3 from '../../images/BrooklynChop.jpg';
import baconStack from '../../images/baconStack.jpg';
import sandwich5 from '../../images/5.jpg';
import goudaMeal from '../../images/gouda.png';
import macNChicken from '../../images/macnChicken.png';
import macNBurger from '../../images/macburger.jpg';

export default function Grid(props) {
  const [gridData, setGridData] = useState('');
  const [gridOpen, setGridOpen] = useState(false);
  const [gridBurgerData, setGridBurgerData] = useState('');
  const [gridBurgerOpen, setGridBurgerOpen] = useState(false);

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
      <BurgerSandwichModal
        price={props.price}
        SetPrice={props.SetPrice}
        SetProduct={props.SetProduct}
        product={props.product}
        SetShowCart={props.SetShowCart}
        modalData={gridBurgerData}
        open={gridBurgerOpen}
        setOpen={setGridBurgerOpen}
      />
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Signature Sandwiches</h2>
          <p>Click to View</p>
        </div>
        <div className={styles.gridContainer}>
          <SmallGrid
            picture={Sassinator}
            SandwichPicture={Sassinator}
            SandwichName={`The "Sassinator"`}
            Price={13.95}
            Description={`Philly Steak, 100% Angus Beef Burger, Crispy Bacon, Caramelized Red
      Onions, Swiss cheese, peppercorn aioli on a toasted Brioche Bun`}
            item={'gridOne'}
            setGridData={setGridData}
            setGridOpen={setGridOpen}
          />
          <LargeGrid
            picture={Container3}
            SandwichPicture={Container3}
            SandwichName={'Brooklyn Chop'}
            Price={14.95}
            Description={
              'Chopped Angus Beef, Applewood Smoked Bacon, Vermont Cheddar Cheese, American Cheese, Sauteed Onions, Shredded Lettuce, Sliced Ripe Tomato, honey BBQ, served on toasted Italian Hero.'
            }
            item={'gridTwo'}
            setGridData={setGridBurgerData}
            setGridOpen={setGridBurgerOpen}
          />
          <SmallGrid
            picture={baconStack}
            SandwichPicture={baconStack}
            SandwichName={'Bacon Stack'}
            Price={13.95}
            Description={`Double Cheesburger WIth Cheddar and Mozzarella Cheese, Stacked
      with Crispy Bacon, Topped off with Caramelized Onions & Chipotle
      Mayo Aioli`}
            item={'gridThree'}
            setGridData={setGridBurgerData}
            setGridOpen={setGridBurgerOpen}
          />
          <LargeGrid
            picture={sandwich5}
            SandwichPicture={sandwich5}
            SandwichName={'Grilled Balsamic Chicken W/ Mozzarella & Bacon'}
            Price={12.95}
            Description={
              'Grilled Chicken Breast Topped With Melted Mozzarella Cheese, Avocado, Smoked Bacon, Caramelized Onions, Leafy Lettuce, Sassy’s Chipotle Mayo Aioli'
            }
            item={'gridFour'}
            setGridData={setGridData}
            setGridOpen={setGridOpen}
          />
          <SmallGrid
            picture={goudaMeal}
            SandwichPicture={goudaMeal}
            SandwichName={'Gouda Meal'}
            Price={12.95}
            Description={`Crispy Chicken Cutlet, Chipotle gouda, Smoked Bacon, Lettuce, Tomato, topped off with Ketchup, & Ranch.
            We all agreed that it was a good meal. A really "Gouda Meal"!`}
            item={'gridFive'}
            setGridData={setGridData}
            setGridOpen={setGridOpen}
          />
          <SmallGrid
            picture={macNChicken}
            SandwichPicture={macNChicken}
            SandwichName={`Mac N' Chicken`}
            Price={13.95}
            Description={`Crispy Chicken Cutlet topped with Melted Cheddar, Cheddar Mac and Cheese, Crispy Bacon, and Sassy's Chipotle Mayo Aioli. Served on a Toasted Broiche Bun.`}
            item={'gridSix'}
            setGridData={setGridData}
            setGridOpen={setGridOpen}
          />
          <SmallGrid
            picture={macNBurger}
            SandwichPicture={macNBurger}
            SandwichName={'Mac N Cheese Beef Burger'}
            Price={12.95}
            Description={
              'Cheddar burger topped with our creamy mac n cheese, bacon, sauteed onions, and BBQ sauce'
            }
            item={'gridSeven'}
            setGridData={setGridBurgerData}
            setGridOpen={setGridBurgerOpen}
          />
        </div>
      </div>
    </>
  );
}

function LargeGrid(props) {
  const [open, setOpen] = useState(false);

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
    <button
      className={`${styles.large} ${props.item}`}
      onClick={sendModalData}
      onMouseEnter={() => setOpen(!open)}
      onMouseLeave={() => setOpen(!open)}
    >
      <div className={styles.imageContainer}>
        <img src={props.picture} className={styles.image} alt={'Sandwich'} />
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className={styles.description}
              key={'raiseup'}
              initial={{ height: 0 }}
              animate={{ height: '20%' }}
              transition={{ duration: 0.5 }}
              exit={{ height: '0vh', transition: { duration: 0.5 } }}
            >
              <motion.p
                key={'text'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ height: '0vh', transition: { duration: 0.5 } }}
              >
                {props.SandwichName}
              </motion.p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </button>
  );
}

function SmallGrid(props) {
  const [open, setOpen] = useState(false);

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
    <button
      className={`${styles.small} ${props.item}`}
      onClick={sendModalData}
      onMouseOver={() => setOpen(!open)}
      onMouseLeave={() => setOpen(!open)}
    >
      <div className={styles.imageContainer}>
        <img src={props.picture} className={styles.image} alt={'Sandwich'} />
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className={styles.description}
              key={'raiseup'}
              initial={{ height: 0 }}
              animate={{ height: '20%' }}
              transition={{ duration: 0.5 }}
              exit={{ height: '0vh', transition: { duration: 0.5 } }}
            >
              <motion.p
                key={'text'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ height: '0vh', transition: { duration: 0.5 } }}
              >
                {props.SandwichName}
              </motion.p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </button>
  );
}
