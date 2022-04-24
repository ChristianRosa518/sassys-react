import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './Sandwiches.css';
import './modal.css';

// Sandwich Images
import BrooklynChop from '../images/BrooklynChop.jpg';
import Sassinator from '../images/Sassinator.jpg';
import BaconStack from '../images/baconStack.jpg';
import Philly from '../images/philly.png';
import Blt from '../images/blt.png';
import MadBurger from '../images/mad.png';
import Gouda from '../images/gouda.png';
import Parm from '../images/parm.png';
import SpicyMama from '../images/spicymama.png';
import Regula from '../images/regula.png';

//

export default function Sandwiches(ModalInformation) {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState('');

  return (
    <div className="sandContainer">
      <section>
        <h1>Sassy's Specialty Sandwiches</h1>
        <p className="center">Click to view</p>
      </section>
      <SandCardContainer
        State={true}
        ContainerTitle={'Specialty Sandwiches'}
        ContainerDescription={"The customer's favorites!"}
      >
        <>
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={BrooklynChop}
            SandwichName="Brooklyn Chop"
            Description="Chopped Angus Beef, Applewood Smoked Bacon, Vermont Cheddar Cheese,
          American Cheese, Sauteed Onions, Shredded Lettuce, Sliced Ripe
          Tomato, honey BBQ, served on toasted Italian Hero."
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Sassinator}
            SandwichName={`The "Sassinator"`}
            Description={`Philly Steak, 100% Angus Beef Burger, Crispy Bacon, Caramelized Red
          Onions, Swiss cheese, peppercorn aioli on a toasted Brioche Bun`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={BaconStack}
            SandwichName={`Bacon Stack`}
            Description={`Double Cheesburger WIth Cheddar and Mozzarella Cheese, Stacked
          with Crispy Bacon, Topped off with Caramelized Onions & Chipotle
          Mayo Aioli`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Philly}
            SandwichName={`Philly Cheese Steak`}
            Description={`Steak, Provolone & American Cheese, Red & Green Peppers, Onions,
          and Mayo`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blt}
            SandwichName={`BLT`}
            Description={`Bacon, Romaine Lettuce, Tomato & Mayo! Served on Toasted Bread!`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={MadBurger}
            SandwichName={`Sassy's Mad Burger`}
            Description={`8oz Angus Beef Topped with Melted American Cheese, Crispy Bacon,
          Crispy Jumbo Onion Rings, Ketchup & Mayo. Served on Toasted
          Broiche Bun.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Gouda}
            SandwichName={`4. Gouda Meal`}
            Description={`Crispy Chicken Cutlet, Chipotle gouda, Smoked Bacon, Lettuce,
          Tomato, topped off with Ketchup, & Ranch. We all agreed that it
          was a good meal. A really "Gouda Meal"!`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Parm}
            SandwichName={`7. Crispy Chicken Cutlet Parmigina`}
            Description={`Crispy Chicken Cutlet, Fresh Marinara Sauce, Melted Mozzarella,
          Parmesan Cheese, Basil. Served on Garlic Bread`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={SpicyMama}
            SandwichName={`The Spicy Mama`}
            Description={`Salsalito Turkey Breast, Pepper-jack Cheese, Avocado, Jalapeno
          Peppers, Baby Spinach, Sliced Tomato, Mayonnaise`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Regula}
            SandwichName={`Regula Degula`}
            Description={`Ovengold Roasted Turkey, American Cheese, Smoked Bacon, Avocado,
            Leafy Lettuce, Tomato, Mayonnaise`}
          />
        </>
      </SandCardContainer>

      <SandwichModal modalData={modalData} open={open} setOpen={setOpen} />
    </div>
  );
}

class SandCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.State,
    };
    this.Animations = {
      initial: { transform: 'ScaleY(0)' },
      animate: {
        transform: 'ScaleY(1)',
        transition: { duration: 0.25 },
      },
      exit: {
        transform: 'ScaleY(0)',
        height: 0,
        transition: { duration: 0.25 },
      },
    };
    this.ShowSandwiches = this.ShowSandwiches.bind(this);
  }

  ShowSandwiches() {
    const current = this.state.active;
    this.setState({ active: !current });
  }

  render() {
    return (
      <section className="section">
        <h2 onClick={this.ShowSandwiches}>- {this.props.ContainerTitle} -</h2>
        <p>{this.props.ContainerDescription}</p>
        <AnimatePresence>
          {this.state.active && (
            <motion.div
              id={'Item'}
              exit={'exit'}
              className={'show'}
              initial={'initial'}
              animate={'animate'}
              variants={this.Animations}
            >
              {this.props.children}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
  }
}

class SandwichCard extends React.Component {
  constructor(props) {
    super(props);
    this.sendModalData = this.sendModalData.bind(this);
  }

  sendModalData() {
    const modal = {
      title: this.props.SandwichName,
      description: this.props.Description,
      picture: this.props.SandwichPicture,
    };
    this.props.setModalData(modal);
    this.props.setOpen(true);
  }

  render() {
    return (
      <div>
        <div className={'itemCard'} onClick={this.sendModalData}>
          <div className="cardDes">
            <div className="cardHeader">
              <h3>- {this.props.SandwichName} -</h3>
            </div>
            <p>{this.props.Description}</p>
          </div>
          <div className="cardImgCon">
            <img
              src={this.props.SandwichPicture}
              alt="Sandwich Card Img"
              className="cardImg"
            />
          </div>
        </div>
      </div>
    );
  }
}
class SandwichModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.dummyfunction = this.dummyfunction.bind(this);
  }
  closeModal() {
    this.props.setOpen(false);
  }
  dummyfunction(e) {
    e.stopPropagation();
  }
  render() {
    if (!this.props.open) return null;
    return (
      <motion.div className="modal" onClick={this.closeModal}>
        <div className="modalContent" onClick={this.dummyfunction}>
          <span className="closeButton" onClick={this.closeModal}>
            &times;
          </span>
          <h1>{this.props.modalData.title}</h1>
          <br />
          <p className="section">{this.props.modalData.description}</p>
          <br />
          <div className="modalImageContainer">
            <img src={this.props.modalData.picture} alt="" class="modalImage" />
          </div>
          <div className="orderFlex">
            <a href="https://www.ordersassyssandwiches.com/">
              <button className="orderNow">Order</button>
            </a>
          </div>
          <br />

          <p className="modalBottom">*In app orders will be added soon</p>
        </div>
      </motion.div>
    );
  }
}
