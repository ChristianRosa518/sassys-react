import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './Sandwiches.css';
import './modal.css';
import { data, toppings } from '../../data/sandwichData.js';

import Blank from '../../images/Blank.PNG';

export default function Sandwiches(props) {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState('');

  return (
    <div className="sandContainer">
      <section className="signature_sandwiches">
        <h1>Sassy's Sandwiches</h1>
        <p className="center">Click to view</p>
      </section>
      <SandCardContainer
        State={true}
        ContainerTitle={'Specialty Sandwiches'}
        ContainerDescription={"The customer's favorites!"}
      >
        {data.Specialty.map((sandwich) => (
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
        State={true}
        ContainerTitle={'Burgers'}
        ContainerDescription={'Premium angus Beef!'}
      >
        {data.Burgers.map((sandwich) => (
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
        State={true}
        ContainerTitle={'Chicken Wings'}
        ContainerDescription={`We left the bone in these options`}
      >
        {data.Wings.map((sandwich) => (
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
        State={true}
        ContainerTitle={'Sides'}
        ContainerDescription={`Add fries, Mac-N-Cheese or a variety of options. To your order`}
      >
        {data.Sides.map((sandwich) => (
          <SandwichCardSmall
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
        State={true}
        ContainerTitle={'Milkshakes'}
        ContainerDescription={`Cool off your day`}
      >
        {data.MilkShakes.map((sandwich) => (
          <SandwichCardSmall
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
        State={true}
        ContainerTitle={'Side Sauces'}
        ContainerDescription={`All available Sauces`}
      >
        {data.Sauces.map((sandwich) => (
          <SandwichCardSmall
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
        State={true}
        ContainerTitle={'Drinks'}
        ContainerDescription={`Add a drink! we absolutely have a soda for you, unless we don't!`}
      >
        <>
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Swiss Miss Hot Chocolate`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Columbian Supremo`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Freshly Brewed Iced Coffee`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Nantucket Nectars`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Snapple`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Vita Coco Coconut Water`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Can Soda`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Poland Spring`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Stewart's Fountain Classics 12oz`}
            Description={`Glass bottled classic fountain favorites`}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Tea`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Snapple 20oz`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`San pellegrino 16oz Bottle`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Gatorade`}
            Description={``}
          />
        </>
      </SandCardContainer>

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
    this.formatPrice = this.formatPrice.bind(this);
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
      <div>
        <div className={'itemCard'} onClick={this.sendModalData}>
          <div className="cardDes">
            <div className={`cardHeader`}>
              <h3>- {this.props.SandwichName} -</h3>
              <p>{this.formatPrice(this.props.Price)}</p>
            </div>
            <p>{this.props.Description}</p>
          </div>
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
        </div>
      </div>
    );
  }
}
class SandwichCardSmall extends React.Component {
  constructor(props) {
    super(props);
    this.sendModalData = this.sendModalData.bind(this);
    this.formatPrice = this.formatPrice.bind(this);
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
      <div>
        <div className={'itemCardSmall'} onClick={this.sendModalData}>
          <div className="cardDes">
            <div className="cardHeader">
              <h3>- {this.props.SandwichName} -</h3>
              <p>{this.formatPrice(this.props.Price)}</p>
            </div>
            <p>{this.props.Description}</p>
          </div>
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
        </div>
      </div>
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
      bread: new Array(toppings.Bread.length).fill(false),
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
      bread: new Array(toppings.Bread.length).fill(false),
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
    const updateCheckedState = this.state.bread.map(
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
                            <input
                              type="radio"
                              name={name}
                              value={price}
                              checked={this.state.bread[index]}
                              onChange={() => this.onCheckChange(index)}
                            />
                            <label htmlFor={name}>{name}</label>
                          </div>
                          <div>{this.formatPrice(price)}</div>
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
                            <input
                              type="checkbox"
                              name={name}
                              value={price}
                              checked={this.state.extra[index]}
                              onChange={() => this.onCheckChangeMultiple(index)}
                            />
                            <label htmlFor={name}>{name}</label>
                          </div>
                          <div>{this.formatPrice(price)}</div>
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
