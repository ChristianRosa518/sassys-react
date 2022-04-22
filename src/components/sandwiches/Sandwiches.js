import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './Sandwiches.css';
import './modal.css';

// Sandwich Images
import BrooklynChop from '../images/BrooklynChop.jpg';
import Sassinator from '../images/Sassinator.jpg';
import BaconStack from '../images/baconStack.jpg';

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
