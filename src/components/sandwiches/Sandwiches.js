import React, { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './Sandwiches.css';
import './modal.css';
import { data, toppings } from '../../data/sandwichData.js';
import './filter.css';

import Blank from '../../images/Blank.PNG';
import Filter from './Filter';

export default function Sandwiches(props) {
  const arr = [
    { id: 1, name: 'Sandwich Combos' },
    { id: 2, name: 'Specialty Sandwiches' },
    { id: 3, name: 'Burgers' },
    { id: 4, name: 'Breakfast Sandwiches' },
    { id: 5, name: 'Chicken Sandwiches' },
    { id: 6, name: 'Chicken Wings' },
    { id: 7, name: 'Turkey Sandwiches' },
    { id: 8, name: 'Beef and Toasted Sandwiches' },
    { id: 9, name: 'Salad Sandwiches' },
    { id: 10, name: 'Ham Sandwiches' },
    { id: 11, name: 'Cured Meats and Salami Sandwiches' },
    { id: 12, name: 'Vegetarian Sandwiches' },
    { id: 13, name: 'Sides' },
    { id: 14, name: 'Milkshakes' },
    { id: 15, name: 'Side Sauces' },
    { id: 16, name: 'Drinks' },
  ];

  const refs = useRef(null);

  const scrollFun = (id) => {
    document.querySelector(`#id${id}`)?.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
    });
  };

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState('');
  //
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [burgerModalData, setBurgerModalData] = useState('');
  //
  const [defaultOpen, setDefaultOpen] = useState(false);
  const [defaultModalData, setDefaultModalData] = useState('');
  //
  const [wingOpen, setWingOpen] = useState(false);
  const [wingModalData, setWingModalData] = useState('');

  return (
    <div className="sandContainer">
      <section className="signature_sandwiches">
        <h2>Sassy's Sandwiches</h2>
        <p className="center">Click on Items to view</p>
      </section>
      <div className="filterContainer">
        <div className="filter" ref={refs}>
          {arr.map((id) => (
            <button key={id} onClick={() => scrollFun(id.id)}>
              {id.name}
            </button>
          ))}
        </div>
        <div className="sandwichContainerFilter">
          <SandCardContainer
            id={1}
            State={true}
            ContainerTitle={'Sandwich Combos'}
            ContainerDescription={'Meat Combos!'}
          >
            {data.Combos.map((sandwich) => (
              <SandwichCard
                key={sandwich.name}
                setModalData={setModalData}
                setOpen={setOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={2}
            State={true}
            ContainerTitle={'Specialty Sandwiches'}
            ContainerDescription={"The customer's favorites!"}
          >
            {data.Specialty.map((sandwich) =>
              sandwich.tag === 'Burger' ? (
                <SandwichCard
                  key={sandwich.name}
                  setModalData={setBurgerModalData}
                  setOpen={setBurgerOpen}
                  SandwichPicture={sandwich.image}
                  SandwichName={sandwich.name}
                  Price={sandwich.price}
                  Description={sandwich.description}
                />
              ) : (
                <SandwichCard
                  key={sandwich.name}
                  setModalData={setModalData}
                  setOpen={setOpen}
                  SandwichPicture={sandwich.image}
                  SandwichName={sandwich.name}
                  Price={sandwich.price}
                  Description={sandwich.description}
                />
              )
            )}
          </SandCardContainer>
          <SandCardContainer
            id={3}
            State={true}
            ContainerTitle={'Burgers'}
            ContainerDescription={'Premium angus Beef!'}
          >
            {data.Burgers.map((sandwich) => (
              <SandwichCard
                key={sandwich.name}
                setModalData={setBurgerModalData}
                setOpen={setBurgerOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={4}
            State={true}
            ContainerTitle={`Breakfast Sandwiches`}
            ContainerDescription={`Morning Starters, even an afternoon starter!`}
          >
            {data.Breakfast.map((sandwich) => (
              <SandwichCard
                key={sandwich.name}
                setModalData={setModalData}
                setOpen={setOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={5}
            State={true}
            ContainerTitle={'Chicken Sandwiches'}
            ContainerDescription={`Sassy's Grilled and Cripsy Chicken sandwiches!`}
          >
            {data.Chicken.map((sandwich) => (
              <SandwichCard
                key={sandwich.name}
                setModalData={setModalData}
                setOpen={setOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={6}
            State={true}
            ContainerTitle={'Chicken Wings'}
            ContainerDescription={`We left the bone in these options`}
          >
            {data.Wings.map((sandwich) => (
              <SandwichCard
                key={sandwich.name}
                setModalData={setWingModalData}
                setOpen={setWingOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={7}
            State={true}
            ContainerTitle={'Signature Turkey Sandwiches'}
            ContainerDescription={`gobble gobble gobble`}
          >
            {data.Turkey.map((sandwich) => (
              <SandwichCard
                key={sandwich.name}
                setModalData={setModalData}
                setOpen={setOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={8}
            State={true}
            ContainerTitle={'Signature Beef and Toasted Sandwiches'}
            ContainerDescription={`Nothing but beef, except for #28, there's some turkey in there too.`}
          >
            {data.Beef.map((sandwich) => (
              <SandwichCard
                key={sandwich.name}
                setModalData={setModalData}
                setOpen={setOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={9}
            State={true}
            ContainerTitle={'Signature Salad Sandwiches'}
            ContainerDescription={`Albacore tuna sandwich, we need more salad options`}
          >
            {data.Salad.map((sandwich) => (
              <SandwichCard
                key={sandwich.name}
                setModalData={setModalData}
                setOpen={setOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={10}
            State={true}
            ContainerTitle={'Signature Ham Sandwiches'}
            ContainerDescription={`Black forest, Honey maple, Bourbon ham, you name it`}
          >
            {data.Ham.map((sandwich) => (
              <SandwichCard
                key={sandwich.name}
                setModalData={setModalData}
                setOpen={setOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={11}
            State={true}
            ContainerTitle={'Signature Cured Meats and Salami Sandwiches'}
            ContainerDescription={`Sassy's Cured Meats and Salami Sandwiches`}
          >
            {data.Salami.map((sandwich) => (
              <SandwichCard
                key={sandwich.name}
                setModalData={setModalData}
                setOpen={setOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={12}
            State={true}
            ContainerTitle={'Vegetarian Sandwiches'}
            ContainerDescription={`Vegetarian options`}
          >
            {data.Vegan.map((sandwich) => (
              <SandwichCard
                key={sandwich.name}
                setModalData={setModalData}
                setOpen={setOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={13}
            State={true}
            ContainerTitle={'Sides'}
            ContainerDescription={`Add fries, Mac-N-Cheese or a variety of options. To your order`}
          >
            {data.Sides.map((sandwich) => (
              <SandwichCardSmall
                key={sandwich.name}
                setModalData={setDefaultModalData}
                setOpen={setDefaultOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={14}
            State={true}
            ContainerTitle={'Milkshakes'}
            ContainerDescription={`Cool off your day`}
          >
            {data.MilkShakes.map((sandwich) => (
              <SandwichCardSmall
                key={sandwich.name}
                setModalData={setDefaultModalData}
                setOpen={setDefaultOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={15}
            State={true}
            ContainerTitle={'Side Sauces'}
            ContainerDescription={`All available Sauces`}
          >
            {data.Sauces.map((sandwich) => (
              <SandwichCardSmall
                key={sandwich.name}
                setModalData={setDefaultModalData}
                setOpen={setDefaultOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
          <SandCardContainer
            id={16}
            State={true}
            ContainerTitle={'Drinks'}
            ContainerDescription={`Add a drink! we absolutely have a soda for you, unless we don't!`}
          >
            {data.Drinks.map((sandwich) => (
              <SandwichCardSmall
                key={sandwich.name}
                setModalData={setDefaultModalData}
                setOpen={setDefaultOpen}
                SandwichPicture={sandwich.image}
                SandwichName={sandwich.name}
                Price={sandwich.price}
                Description={sandwich.description}
              />
            ))}
          </SandCardContainer>
        </div>
      </div>

      <SandwichModal
        modalData={modalData}
        open={open}
        setOpen={setOpen}
        price={props.price}
        SetPrice={props.SetPrice}
        SetProduct={props.SetProduct}
        product={props.product}
        SetShowCart={props.SetShowCart}
      />
      <BurgerSandwichModal
        modalData={burgerModalData}
        open={burgerOpen}
        setOpen={setBurgerOpen}
        price={props.price}
        SetPrice={props.SetPrice}
        SetProduct={props.SetProduct}
        product={props.product}
        SetShowCart={props.SetShowCart}
      />
      <DefaultSandwichModal
        modalData={defaultModalData}
        open={defaultOpen}
        setOpen={setDefaultOpen}
        price={props.price}
        SetPrice={props.SetPrice}
        SetProduct={props.SetProduct}
        product={props.product}
        SetShowCart={props.SetShowCart}
      />
      <WingSandwichModal
        modalData={wingModalData}
        open={wingOpen}
        setOpen={setWingOpen}
        price={props.price}
        SetPrice={props.SetPrice}
        SetProduct={props.SetProduct}
        product={props.product}
        SetShowCart={props.SetShowCart}
      />
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
      <section className="section" id={`id${this.props.id}`}>
        <h2 onClick={this.ShowSandwiches}> {this.props.ContainerTitle}</h2>
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
    this.formatPrice = this.formatPrice.bind(this);
    this.state = { color: false };
  }

  formatPrice(price) {
    let dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let amount = dollarUS.format(price);
    return amount;
  }

  sendModalData() {
    const modal = {
      title: this.props.SandwichName,
      description: this.props.Description,
      picture: this.props.SandwichPicture,
      price: this.props.Price,
    };
    this.props.setModalData(modal);
    this.props.setOpen(true);
  }

  render() {
    return (
      <button
        className={`itemCard `}
        onClick={this.sendModalData}
        onMouseEnter={() => this.setState({ color: !this.state.color })}
        onMouseLeave={() => this.setState({ color: !this.state.color })}
      >
        <div
          className={`cardHeader ${
            this.state.color ? 'cardHeaderColorChange' : ''
          }`}
        >
          <h3>{this.props.SandwichName}</h3>
          <p>{this.formatPrice(this.props.Price)}</p>
        </div>
        <div className="cardDes">
          {this.props.SandwichPicture === Blank ? (
            ''
          ) : (
            <div className="cardImgCon">
              <img
                src={this.props.SandwichPicture}
                alt="Sandwich Card Img"
                className="cardImg"
              />
            </div>
          )}
          <p>{this.props.Description}</p>
        </div>
      </button>
    );
  }
}
class SandwichCardSmall extends React.Component {
  constructor(props) {
    super(props);
    this.sendModalData = this.sendModalData.bind(this);
    this.formatPrice = this.formatPrice.bind(this);
    this.state = { color: false };
  }

  formatPrice(price) {
    let dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      // Lol
    });
    let amount = dollarUS.format(price);
    return amount;
  }

  sendModalData() {
    const modal = {
      title: this.props.SandwichName,
      description: this.props.Description,
      picture: this.props.SandwichPicture,
      price: this.props.Price,
    };
    this.props.setModalData(modal);
    this.props.setOpen(true);
  }

  render() {
    return (
      <button
        className={'itemCardSmall'}
        onClick={this.sendModalData}
        onMouseEnter={() => this.setState({ color: !this.state.color })}
        onMouseLeave={() => this.setState({ color: !this.state.color })}
      >
        <div
          className={`cardHeader ${
            this.state.color ? 'cardHeaderColorChange' : ''
          }`}
        >
          <h3>- {this.props.SandwichName} -</h3>
          <p>{this.formatPrice(this.props.Price)}</p>
        </div>
        <div className="cardDes">
          {this.props.SandwichPicture === Blank ? (
            ''
          ) : (
            <div className="cardImgCon">
              <img
                src={this.props.SandwichPicture}
                alt="Sandwich Card Img "
                className="cardImg"
              />
            </div>
          )}
          <p>{this.props.Description}</p>
        </div>
      </button>
    );
  }
}
export class SandwichModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.dummyfunction = this.dummyfunction.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.onCheckChange = this.onCheckChange.bind(this);
    this.onCheckChangeMultiple = this.onCheckChangeMultiple.bind(this);
    this.formatPrice = this.formatPrice.bind(this);
    this.ModalBgAnimate = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0, transition: { delay: 0.1 } },
    };
    this.ModalContentAnimate = {
      initial: { y: '150%' },
      animate: { y: 0, transition: { duration: 0.4 } },
      exit: { y: '150%', transition: { duration: 0.4 } },
    };
    this.state = {
      amount: this.props.modalData.price,
      bread: new Array(toppings.Bread.length).fill(true, 0, 1, false),
      extra: new Array(toppings.Extras.length).fill(false),
      breadCost: 0,
      extrasCost: 0,
      Bread: 'Roll',
      Toppings: '',
      Instructions: '',
    };
  }

  addProduct(e) {
    if (this.props.product.length >= 10) {
      alert('no more than 10 items');
    } else {
      let amount =
        this.props.modalData.price +
        this.state.breadCost +
        this.state.extrasCost;

      let tops = this.state.Bread + '\n' + this.state.Toppings;
      const data = {
        id: this.props.product.length + 1,
        title: this.props.modalData.title,
        description: this.props.modalData.description,
        price: amount,
        picture: this.props.modalData.picture,
        toppings: tops,
        bread: this.state.Bread,
        adds: this.state.Toppings,
        instructions: this.state.Instructions,
      };
      const newData = [...this.props.product];
      newData.push(data);
      this.props.SetProduct(newData);
      const sum = newData.reduce(function (a, b) {
        return a + b.price;
      }, 0);
      let dollarUS = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      let price = dollarUS.format(sum);
      this.props.SetPrice(price);
      this.closeModal();
      this.props.SetShowCart(true);
    }
  }

  closeModal() {
    this.props.setOpen(false);
    this.setState({
      bread: new Array(toppings.Bread.length).fill(true, 0, 1, false),
      extra: new Array(toppings.Extras.length).fill(false),
      amount: this.props.modalData.price,
      breadCost: 0,
      extrasCost: 0,
      Bread: 'Roll',
      Toppings: '',
      Instructions: '',
    });
  }
  dummyfunction(e) {
    e.stopPropagation();
  }
  formatPrice(price) {
    let dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let amount = dollarUS.format(price);
    return amount;
  }
  onCheckChange(position) {
    const check = new Array(toppings.Bread.length).fill(false);
    const updateCheckedState = check.map(
      (item, index) => (index === position ? true : false)
      //  ? !item : item for multiple options
    );

    this.setState({ bread: updateCheckedState });

    const totalPrice = updateCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        this.setState({ Bread: toppings.Bread[index].name });
        return sum + toppings.Bread[index].price;
      }
      return sum;
    }, 0);

    this.setState({ breadCost: totalPrice });
    var extras = this.state.extrasCost;
    var base = this.props.modalData.price + totalPrice + extras;

    this.setState({ amount: base });
  }
  onCheckChangeMultiple(position) {
    const updateCheckedState = this.state.extra.map((item, index) =>
      index === position ? !item : item
    );

    this.setState({ extra: updateCheckedState });

    const totalPrice = updateCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + toppings.Extras[index].price;
      }
      return sum;
    }, 0);

    const totalNames = updateCheckedState.reduce((name, current, index) => {
      if (current === true) {
        return name + toppings.Extras[index].name + ',\n';
      }
      return name;
    }, '');

    this.setState({ Toppings: totalNames });

    this.setState({ extrasCost: totalPrice });
    var extras = this.state.breadCost;
    var base = this.props.modalData.price + extras + totalPrice;
    this.setState({
      amount: base,
    });
  }

  render() {
    // if (!this.props.open) return null;
    return (
      <>
        <AnimatePresence>
          {this.props.open && (
            <motion.div
              key={'modalBG'}
              className="modal"
              onClick={this.closeModal}
              variants={this.ModalBgAnimate}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
            >
              <motion.div
                className="modalContent"
                onClick={this.dummyfunction}
                key={'modalContent'}
                variants={this.ModalContentAnimate}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
              >
                <div className="modalInformation sectionModal">
                  <h2>{this.props.modalData.title}</h2>
                  <p>{this.props.modalData.description}</p>
                  <div className="mobileOrderFlex">
                    <h2>
                      {this.state.amount > this.props.modalData.price
                        ? this.formatPrice(this.state.amount)
                        : this.formatPrice(this.props.modalData.price)}
                    </h2>
                    <button className="orderNow" onClick={this.addProduct}>
                      Order
                    </button>
                  </div>
                </div>
                <div className="modalImageContainer">
                  {this.props.modalData.picture === Blank ? (
                    ''
                  ) : (
                    <img
                      src={this.props.modalData.picture}
                      alt=""
                      className="modalImage"
                    />
                  )}

                  {/* Toppings */}
                  <h3>Bread Option</h3>
                  <ul className="modalToppings">
                    {toppings.Bread.map(({ name, price }, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => this.onCheckChange(index)}
                        >
                          <div className="modalInput">
                            <label htmlFor={name}>
                              <input
                                type="radio"
                                name={name}
                                value={price}
                                checked={this.state.bread[index]}
                                onChange={() => this.onCheckChange(index)}
                              />

                              {name}
                            </label>
                            <p>{this.formatPrice(price)}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <h3>Extras</h3>
                  <ul className="modalToppings">
                    {toppings.Extras.map(({ name, price }, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => this.onCheckChangeMultiple(index)}
                        >
                          <div className="modalInput">
                            <label htmlFor={name}>
                              <input
                                type="checkbox"
                                name={name}
                                value={price}
                                checked={this.state.extra[index]}
                                onChange={() =>
                                  this.onCheckChangeMultiple(index)
                                }
                              />
                              {name}
                            </label>
                            <p>{this.formatPrice(price)}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div>
                    <h3>Extra instructions</h3>
                    <textarea
                      className="modalExtraInstructions"
                      value={this.state.Instructions}
                      onChange={(e) =>
                        this.setState({ Instructions: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <br />
                </div>

                <div className="orderFlex">
                  <h2>
                    {this.state.amount > this.props.modalData.price
                      ? this.formatPrice(this.state.amount)
                      : this.formatPrice(this.props.modalData.price)}
                  </h2>
                  <button className="orderNow" onClick={this.addProduct}>
                    Add to Cart
                  </button>
                </div>
                <span className="closeButton" onClick={this.closeModal}>
                  &times;
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
}
export class BurgerSandwichModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.dummyfunction = this.dummyfunction.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.onCheckChange = this.onCheckChange.bind(this);
    this.onCheckChangeMultiple = this.onCheckChangeMultiple.bind(this);
    this.formatPrice = this.formatPrice.bind(this);
    this.ModalBgAnimate = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0, transition: { delay: 0.1 } },
    };
    this.ModalContentAnimate = {
      initial: { y: '150%' },
      animate: { y: 0, transition: { duration: 0.4 } },
      exit: { y: '150%', transition: { duration: 0.4 } },
    };
    this.state = {
      amount: this.props.modalData.price,
      burger: new Array(toppings.Burgers.length).fill(true, 0, 1, false),
      extra: new Array(toppings.Extras.length).fill(false),
      burgerCost: 0,
      extrasCost: 0,
      Burger: 'Single',
      Toppings: '',
      Instructions: '',
    };
  }

  addProduct(e) {
    if (this.props.product.length >= 10) {
      alert('no more than 10 items');
    } else {
      let amount =
        this.props.modalData.price +
        this.state.burgerCost +
        this.state.extrasCost;

      let tops = this.state.Burger + '\n' + this.state.Toppings;
      const data = {
        id: this.props.product.length + 1,
        title: this.props.modalData.title,
        description: this.props.modalData.description,
        price: amount,
        picture: this.props.modalData.picture,
        toppings: tops,
        bread: this.state.Burger,
        adds: this.state.Toppings,
        instructions: this.state.Instructions,
      };
      const newData = [...this.props.product];
      newData.push(data);
      this.props.SetProduct(newData);
      const sum = newData.reduce(function (a, b) {
        return a + b.price;
      }, 0);
      let dollarUS = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      let price = dollarUS.format(sum);
      this.props.SetPrice(price);
      this.closeModal();
      this.props.SetShowCart(true);
    }
  }

  closeModal() {
    this.props.setOpen(false);
    this.setState({
      amount: this.props.modalData.price,
      burger: new Array(toppings.Burgers.length).fill(true, 0, 1, false),
      extra: new Array(toppings.Extras.length).fill(false),
      burgerCost: 0,
      extrasCost: 0,
      Burger: 'Single',
      Toppings: '',
      Instructions: '',
    });
  }
  dummyfunction(e) {
    e.stopPropagation();
  }
  formatPrice(price) {
    let dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let amount = dollarUS.format(price);
    return amount;
  }
  onCheckChange(position) {
    const check = new Array(toppings.Bread.length).fill(false);
    const updateCheckedState = check.map(
      (item, index) => (index === position ? true : false)
      //  ? !item : item for multiple options
    );

    this.setState({ burger: updateCheckedState });

    const totalPrice = updateCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        this.setState({ Burger: toppings.Burgers[index].name });
        return sum + toppings.Burgers[index].price;
      }
      return sum;
    }, 0);

    this.setState({ burgerCost: totalPrice });
    var extras = this.state.extrasCost;
    var base = this.props.modalData.price + totalPrice + extras;

    this.setState({ amount: base });
  }
  onCheckChangeMultiple(position) {
    const updateCheckedState = this.state.extra.map((item, index) =>
      index === position ? !item : item
    );

    this.setState({ extra: updateCheckedState });

    const totalPrice = updateCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + toppings.Extras[index].price;
      }
      return sum;
    }, 0);

    const totalNames = updateCheckedState.reduce((name, current, index) => {
      if (current === true) {
        return name + toppings.Extras[index].name + ',\n';
      }
      return name;
    }, '');

    this.setState({ Toppings: totalNames });

    this.setState({ extrasCost: totalPrice });
    var extras = this.state.burgerCost;
    var base = this.props.modalData.price + extras + totalPrice;
    this.setState({
      amount: base,
    });
  }

  render() {
    // if (!this.props.open) return null;
    return (
      <>
        <AnimatePresence>
          {this.props.open && (
            <motion.div
              key={'modalBG'}
              className="modal"
              onClick={this.closeModal}
              variants={this.ModalBgAnimate}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
            >
              <motion.div
                className="modalContent"
                onClick={this.dummyfunction}
                key={'modalContent'}
                variants={this.ModalContentAnimate}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
              >
                <div className="modalInformation sectionModal">
                  <h2>{this.props.modalData.title}</h2>
                  <p>{this.props.modalData.description}</p>
                  <div className="mobileOrderFlex">
                    <h2>
                      {this.state.amount > this.props.modalData.price
                        ? this.formatPrice(this.state.amount)
                        : this.formatPrice(this.props.modalData.price)}
                    </h2>
                    <button className="orderNow" onClick={this.addProduct}>
                      Order
                    </button>
                  </div>
                </div>
                <div className="modalImageContainer">
                  {this.props.modalData.picture === Blank ? (
                    ''
                  ) : (
                    <img
                      src={this.props.modalData.picture}
                      alt=""
                      className="modalImage"
                    />
                  )}

                  {/* Toppings */}
                  <h3>Single or Double?</h3>
                  <ul className="modalToppings">
                    {toppings.Burgers.map(({ name, price }, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => this.onCheckChange(index)}
                        >
                          <div className="modalInput">
                            <label htmlFor={name}>
                              <input
                                type="radio"
                                name={name}
                                value={price}
                                checked={this.state.burger[index]}
                                onChange={() => this.onCheckChange(index)}
                              />

                              {name}
                            </label>
                            <p>{this.formatPrice(price)}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <h3>Extras</h3>
                  <ul className="modalToppings">
                    {toppings.Extras.map(({ name, price }, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => this.onCheckChangeMultiple(index)}
                        >
                          <div className="modalInput">
                            <label htmlFor={name}>
                              <input
                                type="checkbox"
                                name={name}
                                value={price}
                                checked={this.state.extra[index]}
                                onChange={() =>
                                  this.onCheckChangeMultiple(index)
                                }
                              />

                              {name}
                            </label>
                            <p>{this.formatPrice(price)}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div>
                    <h3>Extra instructions</h3>
                    <textarea
                      className="modalExtraInstructions"
                      value={this.state.Instructions}
                      onChange={(e) =>
                        this.setState({ Instructions: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <br />
                </div>

                <div className="orderFlex">
                  <h2>
                    {this.state.amount > this.props.modalData.price
                      ? this.formatPrice(this.state.amount)
                      : this.formatPrice(this.props.modalData.price)}
                  </h2>
                  <button className="orderNow" onClick={this.addProduct}>
                    Add to Cart
                  </button>
                </div>
                <span className="closeButton" onClick={this.closeModal}>
                  &times;
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
}
export class WingSandwichModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.dummyfunction = this.dummyfunction.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.onCheckChange = this.onCheckChange.bind(this);
    this.onCheckChangeMultiple = this.onCheckChangeMultiple.bind(this);
    this.formatPrice = this.formatPrice.bind(this);
    this.ModalBgAnimate = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0, transition: { delay: 0.1 } },
    };
    this.ModalContentAnimate = {
      initial: { y: '155%' },
      animate: { y: 0, transition: { duration: 0.4 } },
      exit: { y: '150%', transition: { duration: 0.4 } },
    };
    this.state = {
      amount: this.props.modalData.price,
      wingsAmount: new Array(toppings.Wings.length).fill(false),
      wingsType: new Array(toppings.WingsType.length).fill(true, 0, 1, false),
      wingsAmountCost: 0,
      wingsTypeCost: 0,
      Burger: '6Pcs',
      Toppings: '',
      Instructions: '',
    };
  }

  addProduct(e) {
    if (this.props.product.length >= 10) {
      alert('No more than 10 items');
    } else {
      let amount =
        this.props.modalData.price +
        this.state.wingsAmountCost +
        this.state.wingsTypeCost;

      let tops = this.state.Burger + '\n' + this.state.Toppings;
      const data = {
        id: this.props.product.length + 1,
        title: this.props.modalData.title,
        description: this.props.modalData.description,
        price: amount,
        picture: this.props.modalData.picture,
        toppings: tops,
        bread: this.state.Burger,
        adds: this.state.Toppings,
        instructions: this.state.Instructions,
      };
      const newData = [...this.props.product];
      newData.push(data);
      this.props.SetProduct(newData);
      const sum = newData.reduce(function (a, b) {
        return a + b.price;
      }, 0);
      let dollarUS = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      let price = dollarUS.format(sum);
      this.props.SetPrice(price);
      this.closeModal();
      this.props.SetShowCart(true);
    }
  }

  closeModal() {
    this.props.setOpen(false);
    this.setState({
      amount: this.props.modalData.price,
      wingsAmount: new Array(toppings.Wings.length).fill(false),
      wingsType: new Array(toppings.WingsType.length).fill(true, 0, 1, false),
      wingsAmountCost: 0,
      wingsTypeCost: 0,
      Burger: '6Pcs',
      Toppings: '',
      Instructions: '',
    });
  }
  dummyfunction(e) {
    e.stopPropagation();
  }
  formatPrice(price) {
    let dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let amount = dollarUS.format(price);
    return amount;
  }
  onCheckChange(position) {
    const check = new Array(toppings.Bread.length).fill(false);
    const updateCheckedState = check.map(
      (item, index) => (index === position ? true : false)
      //  ? !item : item for multiple options
    );

    this.setState({ wingsType: updateCheckedState });

    const totalPrice = updateCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        this.setState({ Burger: toppings.WingsType[index].name });
        return sum + toppings.WingsType[index].price;
      }
      return sum;
    }, 0);

    this.setState({ wingsTypeCost: totalPrice });
    var extras = this.state.wingsAmountCost;
    var base = this.props.modalData.price + totalPrice + extras;

    this.setState({ amount: base });
  }
  onCheckChangeMultiple(position) {
    const updateCheckedState = this.state.wingsAmount.map(
      (item, index) => index === position
      //  ? !item : item
    );

    this.setState({ wingsAmount: updateCheckedState });

    const totalPrice = updateCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + toppings.Wings[index].price;
      }
      return sum;
    }, 0);

    const totalNames = updateCheckedState.reduce((name, current, index) => {
      if (current === true) {
        return name + toppings.Wings[index].name + ',\n';
      }
      return name;
    }, '');

    this.setState({ Toppings: totalNames });

    this.setState({ wingsAmountCost: totalPrice });
    var extras = this.state.wingsTypeCost;
    var base = this.props.modalData.price + extras + totalPrice;
    this.setState({
      amount: base,
    });
  }

  render() {
    // if (!this.props.open) return null;
    return (
      <>
        <AnimatePresence>
          {this.props.open && (
            <motion.div
              key={'modalBG'}
              className="modal"
              onClick={this.closeModal}
              variants={this.ModalBgAnimate}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
            >
              <motion.div
                className="modalContent"
                onClick={this.dummyfunction}
                key={'modalContent'}
                variants={this.ModalContentAnimate}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
              >
                <div className="modalInformation sectionModal">
                  <h2>{this.props.modalData.title}</h2>
                  <p>{this.props.modalData.description}</p>
                  <div className="mobileOrderFlex">
                    <h2>
                      {this.state.amount > this.props.modalData.price
                        ? this.formatPrice(this.state.amount)
                        : this.formatPrice(this.props.modalData.price)}
                    </h2>
                    <button className="orderNow" onClick={this.addProduct}>
                      Order
                    </button>
                  </div>
                </div>
                <div className="modalImageContainer">
                  {this.props.modalData.picture === Blank ? (
                    ''
                  ) : (
                    <img
                      src={this.props.modalData.picture}
                      alt=""
                      className="modalImage"
                    />
                  )}

                  {/* Toppings */}
                  <h3>Wing Type</h3>
                  <ul className="modalToppings">
                    {toppings.WingsType.map(({ name, price }, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => this.onCheckChange(index)}
                        >
                          <div className="modalInput">
                            <label htmlFor={name}>
                              <input
                                type="radio"
                                name={name}
                                value={price}
                                checked={this.state.wingsType[index]}
                                onChange={() => this.onCheckChange(index)}
                              />
                              {name}
                            </label>
                            <p>{this.formatPrice(price)}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <h3>Wing Amount</h3>
                  <ul className="modalToppings">
                    {toppings.Wings.map(({ name, price }, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => this.onCheckChangeMultiple(index)}
                        >
                          <div className="modalInput">
                            <label htmlFor={name}>
                              <input
                                type="checkbox"
                                name={name}
                                value={price}
                                checked={this.state.wingsAmount[index]}
                                onChange={() =>
                                  this.onCheckChangeMultiple(index)
                                }
                              />
                              {name}
                            </label>
                            <p>{this.formatPrice(price)}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div>
                    <h3>Extra instructions</h3>
                    <textarea
                      className="modalExtraInstructions"
                      value={this.state.Instructions}
                      onChange={(e) =>
                        this.setState({ Instructions: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <br />
                </div>

                <div className="orderFlex">
                  <h2>
                    {this.state.amount > this.props.modalData.price
                      ? this.formatPrice(this.state.amount)
                      : this.formatPrice(this.props.modalData.price)}
                  </h2>
                  <button className="orderNow" onClick={this.addProduct}>
                    Add to Cart
                  </button>
                </div>
                <span className="closeButton" onClick={this.closeModal}>
                  &times;
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
}
export class DefaultSandwichModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.dummyfunction = this.dummyfunction.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.onCheckChange = this.onCheckChange.bind(this);
    this.onCheckChangeMultiple = this.onCheckChangeMultiple.bind(this);
    this.formatPrice = this.formatPrice.bind(this);
    this.ModalBgAnimate = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.3 } },
      exit: { opacity: 0, transition: { delay: 0.1 } },
    };
    this.ModalContentAnimate = {
      initial: { y: '150%' },
      animate: { y: 0, transition: { duration: 0.4 } },
      exit: { y: '150%', transition: { duration: 0.4 } },
    };
    this.state = {
      amount: this.props.modalData.price,
      Instructions: '',
    };
  }

  addProduct(e) {
    if (this.props.product.length >= 10) {
      alert('no more than 10 items');
    } else {
      let amount = this.props.modalData.price;

      const data = {
        id: this.props.product.length + 1,
        title: this.props.modalData.title,
        description: this.props.modalData.description,
        price: amount,
        picture: this.props.modalData.picture,
        toppings: '',
        bread: '',
        adds: '',
        instructions: this.state.Instructions,
      };
      const newData = [...this.props.product];
      newData.push(data);
      this.props.SetProduct(newData);
      const sum = newData.reduce(function (a, b) {
        return a + b.price;
      }, 0);
      let dollarUS = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
      let price = dollarUS.format(sum);
      this.props.SetPrice(price);
      this.closeModal();
      this.props.SetShowCart(true);
    }
  }

  closeModal() {
    this.props.setOpen(false);
    this.setState({
      amount: this.props.modalData.price,
      Instructions: '',
    });
  }
  dummyfunction(e) {
    e.stopPropagation();
  }
  formatPrice(price) {
    let dollarUS = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    let amount = dollarUS.format(price);
    return amount;
  }
  onCheckChange(position) {
    const updateCheckedState = this.state.burger.map(
      (item, index) => (index === position ? true : false)
      //  ? !item : item for multiple options
    );

    this.setState({ burger: updateCheckedState });

    const totalPrice = updateCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        this.setState({ Burger: toppings.Burgers[index].name });
        return sum + toppings.Burgers[index].price;
      }
      return sum;
    }, 0);

    this.setState({ burgerCost: totalPrice });
    var extras = this.state.extrasCost;
    var base = this.props.modalData.price + totalPrice + extras;

    this.setState({ amount: base });
  }
  onCheckChangeMultiple(position) {
    const updateCheckedState = this.state.extra.map((item, index) =>
      index === position ? !item : item
    );

    this.setState({ extra: updateCheckedState });

    const totalPrice = updateCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + toppings.Extras[index].price;
      }
      return sum;
    }, 0);

    const totalNames = updateCheckedState.reduce((name, current, index) => {
      if (current === true) {
        return name + toppings.Extras[index].name + ',\n';
      }
      return name;
    }, '');

    this.setState({ Toppings: totalNames });

    this.setState({ extrasCost: totalPrice });
    var extras = this.state.burgerCost;
    var base = this.props.modalData.price + extras + totalPrice;
    this.setState({
      amount: base,
    });
  }

  render() {
    // if (!this.props.open) return null;
    return (
      <>
        <AnimatePresence>
          {this.props.open && (
            <motion.div
              key={'modalBG'}
              className="modal"
              onClick={this.closeModal}
              variants={this.ModalBgAnimate}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}
            >
              <motion.div
                className="modalContent"
                onClick={this.dummyfunction}
                key={'modalContent'}
                variants={this.ModalContentAnimate}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
              >
                <div className="modalInformation sectionModal">
                  <h1>{this.props.modalData.title}</h1>
                  <p>{this.props.modalData.description}</p>
                  <div className="mobileOrderFlex">
                    <h2>
                      {this.state.amount > this.props.modalData.price
                        ? this.formatPrice(this.state.amount)
                        : this.formatPrice(this.props.modalData.price)}
                    </h2>
                    <button className="orderNow" onClick={this.addProduct}>
                      Order
                    </button>
                  </div>
                </div>
                <div className="modalImageContainer">
                  {this.props.modalData.picture === Blank ? (
                    ''
                  ) : (
                    <img
                      src={this.props.modalData.picture}
                      alt=""
                      className="modalImage"
                    />
                  )}
                  <div>
                    <h3>Extra instructions</h3>
                    <textarea
                      className="modalExtraInstructions"
                      value={this.state.Instructions}
                      onChange={(e) =>
                        this.setState({ Instructions: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <br />
                </div>

                <div className="orderFlex">
                  <h2>
                    {this.state.amount > this.props.modalData.price
                      ? this.formatPrice(this.state.amount)
                      : this.formatPrice(this.props.modalData.price)}
                  </h2>
                  <button className="orderNow" onClick={this.addProduct}>
                    Add to Cart
                  </button>
                </div>
                <span className="closeButton" onClick={this.closeModal}>
                  &times;
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
}
