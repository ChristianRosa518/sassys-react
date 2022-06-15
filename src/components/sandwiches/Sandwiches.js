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
import QuickBite from '../images/quik.png';
import SmokeyMeunster from '../images/smokey.png';
import BrooklynBreak from '../images/brklynbreak.png';
import Blank from '../images/Blank.PNG';
//
import macBurger from '../images/macburger.png';
import angusCheese from '../images/angusCheese.png';
import baconCheese from '../images/baconcheese.png';
//
import chicken6 from '../images/Chicken6.jpg';
import macnchicken from '../images/macnChicken.png';
import chicken5 from '../images/chickenSwiss5.png';
import chicken8 from '../images/chickennumba6.png';
import chicken9 from '../images/5.jpg';
import chicken11 from '../images/chicken11.png';
//
import chipotlewings from '../images/chipotlewings.png';
import buffalowings from '../images/buffaloWings.png';
import turkey37 from '../images/37.png';
import turkey41 from '../images/41.png';
import beef25 from '../images/25.png';
import beef26 from '../images/26.png';
import beef27 from '../images/27.png';
import beef28 from '../images/28.png';
import beef29 from '../images/29.jpg';
import beef30 from '../images/30.jpg';
import beef33 from '../images/33.jpg';
import ham16 from '../images/16.jpg';
import meat19 from '../images/19.jpg';
import meat20 from '../images/20.jpg';
import meat21 from '../images/21.jpg';
import meat23 from '../images/23.jpg';
import meat23_2 from '../images/23.2.jpg';
import meat24 from '../images/24.jpg';
//
import mac from '../images/mac.jpg';
import shoefries from '../images/shoeFries.jpg';
//

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
        <>
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={BrooklynChop}
            SandwichName="Brooklyn Chop"
            Price={999}
            Description="Chopped Angus Beef, Applewood Smoked Bacon, Vermont Cheddar Cheese,
            American Cheese, Sauteed Onions, Shredded Lettuce, Sliced Ripe
            Tomato, honey BBQ, served on toasted Italian Hero."
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Sassinator}
            SandwichName={`The "Sassinator"`}
            Price={999}
            Description={`Philly Steak, 100% Angus Beef Burger, Crispy Bacon, Caramelized Red
            Onions, Swiss cheese, peppercorn aioli on a toasted Brioche Bun`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={BaconStack}
            Price={799}
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
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={QuickBite}
            SandwichName={`38. "Quik-Bite"`}
            Description={`Maple Honey Turkey, Cheddar Cheese, Leafy Lettuce, Hot Cherry
              Peppers, Tomato, Mayonnaise`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={SmokeyMeunster}
            SandwichName={`Smokey Muenster`}
            Description={`Smoked Mesquite Turkey Breast, Muenster cheese, Arugula, Creamy
            Russian, ripe tomato, red onion`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`The Bourbon`}
            Description={`Bourbon Smoked Boars Head Ham, Smoked Gouda Cheese, Caramalized
            Mushrooms, Onions, & Bell Peppers, BBQ & Mayo. Served on Toasted
            Garlic Bread`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={BrooklynBreak}
            SandwichName={`"The BKLYN" Breakfast`}
            Description={`2 Eggs Scrambled, Grilled Pastrami, Vermont Sharp Cheddar
            Cheese, Fresh Baby Arugula, Sliced Tomato, White Onion, &
            Chipotle Mayo Aioli`}
          />
        </>
      </SandCardContainer>
      <SandCardContainer
        State={true}
        ContainerTitle={'Burgers'}
        ContainerDescription={'Premium angus Beef!'}
      >
        <>
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={macBurger}
            SandwichName={`Mac-n-Cheese Bacon Beef Burger`}
            Description={`Cheddar burger topped with our creamy mac n cheese, bacon,
            sauteed onions, and BBQ sauce`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Impossible Burger`}
            Description={`Quarter Pound Impossible burger Patty topped plant based
            cheddar, lettuce, tomato, onion, pickles, and vegan roasted
            pepper aioli`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`100% Angus Beef Burger`}
            Description={`100% Juicy Angus Beef Burger Topped With Leafy Lettuce, Sliced
            Tomato, Red Onion, and Pickles. Served on a Toasted Brioche Bun
            (Default is well done)`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={angusCheese}
            SandwichName={`100% Angus Cheeseburger`}
            Description={`100% Juicy Angus Beef Burger Topped With Cheddar Cheese, Leafy
            Lettuce, Sliced Tomato, Red Onion, and Pickles. Served on a
            Toasted Brioche Bun (Default is well done)`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={baconCheese}
            SandwichName={`Bacon Cheese Burger`}
            Description={`100% Juicy Angus Beef Burger Topped With Cheddar Cheese, Smoked
            Bacon Leafy Lettuce, Sliced Tomato, Red Onion, and Pickles.
            Served on a Toasted Brioche Bun (Default is well done)`}
          />
        </>
      </SandCardContainer>
      <SandCardContainer
        State={true}
        ContainerTitle={`Breakfast Sandwiches`}
        ContainerDescription={`Morning Starters, even an afternoon starter!`}
      >
        <>
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Bacon Egg n' Cheese`}
            Description={`2 Eggs Scrambled, Your choice of Cheese, & Crispy Bacon`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Sausage Egg n' Cheese`}
            Description={`2 Eggs Scrambled, Your choice of Cheese, & Savory Sausage`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`2 Eggs Breakfast`}
            Description={`Two Eggs Served Any Way With Your Choice Of Cheese`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Vegetarian Omelette`}
            Description={`3 Eggs, Diced Bell peppers, mushrooms, tomato, onion and
            spinach. Served on choice of bread or platter.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Grilled Cheese Sandwich`}
            Description={`Melted American Cheese Served on Toasted Sliced White or Wheat`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`French Toast`}
            Description={`3 Slices of French Toast from scratch Served with Two Eggs And A
            Side of Syrup`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Pancake Platter`}
            Description={`3 pieces of hot pancakes Served with Two Eggs, Choice of Fruit
            And A Side of Syrup`}
          />
        </>
      </SandCardContainer>
      <SandCardContainer
        State={true}
        ContainerTitle={'Chicken Sandwiches'}
        ContainerDescription={`Sassy's Grilled and Cripsy Chicken sandwiches!`}
      >
        <>
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={chicken6}
            SandwichName={`6. Crispy Chicken W/ American Cheese & Avocado`}
            Description={`Crispy Chicken Cutlet with American Cheese, Ripe avocado, hot
            cherry peppers, tomato, leafy lettuce, and honey Dijon mustard.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={macnchicken}
            SandwichName={`Mac N' Chicken`}
            Description={`Crispy Chicken Cutlet topped with Melted Cheddar, Cheddar Mac
            and Cheese, Crispy Bacon, and Sassy's Chipotle Mayo Aioli.
            Served on a Toasted Broiche Bun.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={chicken5}
            SandwichName={`5. Crispy Chicken W/ Imported Swiss & Bacon`}
            Description={`Crispy Chicken Cutlet Topped With Smoked Bacon, Melted Swiss
            Cheese, Leafy Lettuce, Sliced Tomato, Mayonnaise`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={chicken8}
            SandwichName={`8. Grilled Chicken W/ Pepperjack & Avocado`}
            Description={`Grilled Chicken Breast Topped With Melted Pepper Jack Cheese,
            Baby Spinach, Sliced Tomato, Creamy Ranch Dressing`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={chicken9}
            SandwichName={`9. Grilled Balsamic Chicken W/ Mozzarella & Bacon`}
            Description={`Grilled Chicken Breast Topped With Melted Mozzarella Cheese,
            Avocado, Smoked Bacon, Caramelized Onions, Leafy Lettuce,
            Sassy’s Chipotle Mayo Aioli`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`10. Grilled Chicken W/ Cheddar & Bacon`}
            Description={`Grilled Chicken Breast Topped With Melted Cheddar Cheese, Smoked
            Bacon, Caramelized Red Onions Leafy Lettuce, Sliced Tomato,
            Honey Dijon Mustard`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={chicken11}
            SandwichName={`11. Hot Chipotle Chicken`}
            Description={`Chipotle Chicken Breast, Pepper-jack Cheese, Smoked Bacon, Baby
            Spinach, Hot cherry peppers, Tomato, & Sassy’s Chipotle Mayo
            Aioli`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`#12. The Buffalo`}
            Description={`Grilled Buffalo Chicken Cutlet, Melted Muenster Cheese,
            Caramelized Mushrooms, Leafy Lettuce, Blue Cheese Dressing`}
          />
        </>
      </SandCardContainer>
      <SandCardContainer
        State={true}
        ContainerTitle={'Chicken Wings'}
        ContainerDescription={`We left the bone in these options`}
      >
        <>
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={chipotlewings}
            SandwichName={`Chipotle Tossed Chicken Wings`}
            Description={`Crispy Chicken Wings Tossed in Sassy’s Chipotle Mayo Aioli (Half
              Dozen or Dozen)`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={buffalowings}
            SandwichName={`Buffalo Tossed Chicken Wings`}
            Description={`Crispy Chicken Wings Tossed in Buffalo Sauce (Half Dozen or
              Dozen)`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Lemon Pepper Chicken Wings`}
            Description={``}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Honey BBQ Tossed Chicken Wings`}
            Description={`Crispy Chicken Wings Tossed in Our Homemade Honey BBQ Mix (Half
              Dozen or Dozen)`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Chicken Wings`}
            Description={`Plain Chicken Wings (Half Dozen or Dozen)`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={Blank}
            SandwichName={`Mango Habanero Chicken Wings`}
            Description={``}
          />
        </>
      </SandCardContainer>
      <SandCardContainer
        State={true}
        ContainerTitle={'Signature Turkey Sandwiches'}
        ContainerDescription={`gobble gobble gobble`}
      >
        <>
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={turkey37}
            SandwichName={`37. Peppermill Smoked Turkey Breast Sandwich`}
            Description={`Imported Swiss, shredded iceberg, sliced tomato and Russian
            dressing.`}
          />
          <SandwichCard
            setModalData={setModalData}
            setOpen={setOpen}
            SandwichPicture={turkey41}
            SandwichName={`41. Honey Bbq Turkey Sandwich`}
            Description={`Maple Honey Turkey, Bacon, Lettuce, Tomato, & BBQ Sauce. This
            Sandwich is Christian's Personal Favorite`}
          />
        </>
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
    this.addProduct = this.addProduct.bind(this);
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
  }
  addProduct(e) {
    if (this.props.product.length >= 10) {
      alert('no more than 10 items');
    } else {
      const data = {
        id: this.props.product.length + 1,
        title: this.props.modalData.title,
        description: this.props.modalData.description,
        price: this.props.modalData.price,
        picture: this.props.modalData.picture,
      };
      const newData = [...this.props.product];
      newData.push(data);
      this.props.SetProduct(newData);
      // for loop replaced by .reduce function.
      // let sum = 0;
      // for (let i = 0; i < newData.length + 1; i++) {
      //   sum += newData[i].price;
      // }
      const sum = newData.reduce(function (a, b) {
        return a + b.price;
      }, 0);
      this.props.SetPrice(sum);
      this.closeModal();
      this.props.SetShowCart(true);
    }
  }

  closeModal() {
    this.props.setOpen(false);
  }
  dummyfunction(e) {
    e.stopPropagation();
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
                <div className="modalInformation">
                  <h1>{this.props.modalData.title}</h1>
                  <p>{this.props.modalData.description}</p>
                  <h1 className="sectionModal">{this.props.modalData.price}</h1>
                  <br />
                  <div className="orderFlex">
                    <button className="orderNow" onClick={this.addProduct}>
                      Order
                    </button>
                  </div>
                </div>
                <div className="modalImageContainer">
                  <img
                    src={this.props.modalData.picture}
                    alt=""
                    className="modalImage"
                  />
                  <p className="modalBottom">
                    *In app orders will be added soon
                  </p>
                  <span className="closeButton" onClick={this.closeModal}>
                    &times;
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
}
