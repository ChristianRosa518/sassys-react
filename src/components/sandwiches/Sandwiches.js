import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './Sandwiches.css';
import './modal.css';
import { data, toppings } from '../../data/sandwichData.js';

import Blank from '../../images/Blank.PNG';
import beef25 from '../../images/25.png';
import beef26 from '../../images/26.png';
import beef27 from '../../images/27.png';
import beef28 from '../../images/28.png';
import beef29 from '../../images/29.jpg';
import beef30 from '../../images/30.jpg';
import beef33 from '../../images/33.jpg';
import ham16 from '../../images/16.jpg';
import meat19 from '../../images/19.jpg';
import meat20 from '../../images/20.jpg';
import meat21 from '../../images/21.jpg';
import meat23 from '../../images/23.jpg';
import meat23_2 from '../../images/23.2.jpg';
import meat24 from '../../images/24.jpg';
import mac from '../../images/mac.jpg';
import shoefries from '../../images/shoeFries.jpg';

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
        <>
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={beef25}
            SandwichName={`#25`}
            Description={`Roast Beef Served With Melted Provolone Cheese, Caramelized
            Onions, Baby Arugula, Creamy Russian Dressing`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={beef26}
            SandwichName={`#26`}
            Description={`Roast Beef Topped With Melted Swiss Cheese, Pickles, Leafy
            Lettuce, Sliced Tomato, Sassy’s Chipotle Mayo Aioli`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={beef27}
            SandwichName={`#27`}
            Description={`Roast Beef Topped With Melted Swiss And Cheddar Cheese,
            Caramelized Onions, Homemade Honey BBQ Sauce. Served on Toasted
            Garlic Bread`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={beef28}
            SandwichName={`28. B.H. Roast Beef and Roasted Turkey Combo`}
            Description={`Roast Beef And Ovengold Turkey Topped With Melted Mozzarella
            Cheese, Leafy Lettuce, Sliced Tomato, Pickles, Creamy Russian
            Dressing`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={beef29}
            SandwichName={`29`}
            Description={`Roast Beef Topped With Melted Cheddar Cheese, Smoked Bacon,
            Leafy Lettuce, Caramelized Red Onions, Sliced Tomato, A1 Steak
            Sauce`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={beef30}
            SandwichName={`Toasted Beef Meatball Parmigiana`}
            Description={`Homemade Marinara Sauce, Melted Mozzarella Cheese, Basil, Grated
            Parmigiana, and Sassy's Homemade Meatballs`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`32.Toasted Reuben Sandwich`}
            Description={`First Cut Corned Beef, Melted Swiss Cheese, Sauerkraut, Pickles,
            Creamy Russian Dressing`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={beef33}
            SandwichName={`Big Brooklyn`}
            Description={`Pastrami Topped With Melted Swiss Cheese, Leafy Lettuce, Sliced
            Tomato, Pickles, Spicy Deli Mustard`}
          />
        </>
      </SandCardContainer>
      <SandCardContainer
        State={true}
        ContainerTitle={'Signature Salad Sandwiches'}
        ContainerDescription={`Albacore tuna sandwich, we need more salad options`}
      >
        <>
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`3. Albacore Tuna Salad Sandwich`}
            Description={`Lettuce, tomato, red onion, olive oil and red wine vinegar.`}
          />
        </>
      </SandCardContainer>
      <SandCardContainer
        State={true}
        ContainerTitle={'Signature Ham Sandwiches'}
        ContainerDescription={`Black forest, Honey maple, Bourbon ham, you name it`}
      >
        <>
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`13. Deluxe Boiled Ham Sandwich `}
            Description={`American cheese, shredded lettuce, tomato, mayo, oil and
            vinegar.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`14. Black Forest Ham Sandwich `}
            Description={`Swiss American cheese, leafy green lettuce, red onion, tomato
            and honey Dijon mustard.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={ham16}
            SandwichName={`16. Honey Maple Ham Sandwich `}
            Description={`Provolone, hot cherry peppers, shredded lettuce, tomato and
            honey Dijon mustard.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`18. The Bourbon `}
            Description={`Bourbon Smoked Ham, Smoked Guoda Cheese, Caramalized Mushrooms,
            Onions & Peppers, BBQ & Mayo served on Toasted garlic bread.`}
          />
        </>
      </SandCardContainer>
      <SandCardContainer
        State={true}
        ContainerTitle={'Signature Cured Meats and Salami Sandwiches'}
        ContainerDescription={`Sassy's Cured Meats and Salami Sandwiches`}
      >
        <>
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={meat19}
            SandwichName={`19. Imported Prosciutto D’ Parma Sandwich`}
            Description={` Provolone, ripe tomato, red onion, romaine, olive oil, red
            peppers and balsamic vinegar.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={meat20}
            SandwichName={`20. Imported Prosciutto D’ Parma With Fresh Mozzarella
            Sandwich`}
            Description={`Roasted red peppers, baby arugula, tomatoes and red wine
            vinaigrette.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={meat21}
            SandwichName={`21. Imported Mortadella With Pistachio Sandwich `}
            Description={`Provolone, sliced hot cherry peppers, leafy lettuce, tomatoes
            and balsamic vinaigrette.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`22. Hard Salami Sandwich`}
            Description={`Muenster cheese, alfalfa sprouts, sliced cucumber, red roasted
            peppers and herb mayo.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={meat23}
            SandwichName={`23. Hot Sopressata Salami Sandwich`}
            Description={`Provolone cheese, shredded lettuce, hot cherry peppers, ripe
              tomato, mayo and red wine vinaigrette.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={meat23_2}
            SandwichName={`23.2. Sweet Sopressata Salami Sandwich`}
            Description={`Provolone cheese, shredded lettuce, hot cherry peppers, ripe
            tomato, mayo and red wine vinaigrette.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={meat24}
            SandwichName={`24. Genoa Salami Sandwich`}
            Description={`Provolone, leafy lettuce, ripe tomato, mayo and balsamic
            vinaigrette.`}
          />
        </>
      </SandCardContainer>
      <SandCardContainer
        State={true}
        ContainerTitle={'Vegetarian Sandwiches'}
        ContainerDescription={`Vegetarian options`}
      >
        <>
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Eggplant Parmigiana`}
            Description={`Breaded Eggplant Topped with Homemade Marinara Sauce, Mozzarella
            Cheese, Parmigiana Cheese, and Basil. Served on Toasted Buttered
            Garlic Bread.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Avocado Delight`}
            Description={`Roasted Peppers, Mushrooms, Spinach, Onions, Tomato, Avocado,
              and pesto spread.`}
          />
        </>
      </SandCardContainer>
      <SandCardContainer
        State={true}
        ContainerTitle={'Sides'}
        ContainerDescription={`Add fries, Mac-N-Cheese or a variety of options. To your order`}
      >
        <>
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={mac}
            SandwichName={`Sassy's Creamy Mac-n-Cheddar Cheese`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Crispy Chicken Strips`}
            Description={`5 Pcs of our delicious crispy chicken strips! Comes with your
            choice of side sauce.`}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Steak Cut Fries`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Sweet Potato Fries`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={shoefries}
            SandwichName={`Shoe-String Fries`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Onion Rings`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Potato Chips`}
            Description={`Variety of Potato Chips`}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Seasoned Fries`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Jalapeno Poppers`}
            Description={`6pcs`}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Crazy Fries`}
            Description={`French Fries topped with melted mozzarella and cheddar,
            jalapeño, ketchup, & our homemade chipotle mayo`}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Chicken Nuggets`}
            Description={`Crispy chicken nuggets`}
          />
        </>
      </SandCardContainer>
      <SandCardContainer
        State={true}
        ContainerTitle={'Milkshakes'}
        ContainerDescription={`Cool off your day`}
      >
        <>
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Vanilla Shake`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Hershey's Chocolate Shake`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Resse’s Peanut Butter Cup Shake`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Strawberry Shake`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Oreo Cookies & Cream Shake`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Dulce de Leche Shake`}
            Description={``}
          />
        </>
      </SandCardContainer>
      <SandCardContainer
        State={true}
        ContainerTitle={'Side Sauces'}
        ContainerDescription={`All available Sauces`}
      >
        <>
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Marinara Sauce`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Ranch`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Buffalo Sauce`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Chipotle Mayo Sauce`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Blue Cheese`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Honey Mustard`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`BBQ`}
            Description={``}
          />
          <SandwichCardSmall
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Balsamic Vinaigrette`}
            Description={``}
          />
        </>
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
              <p>{this.props.Price}</p>
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
