import React from 'react';

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
import macBurger from '../images/macburger.png';
import angusCheese from '../images/angusCheese.png';
import baconCheese from '../images/baconcheese.png';
import chicken6 from '../images/Chicken6.jpg';
import macnchicken from '../images/macnChicken.png';
import chicken5 from '../images/chickenSwiss5.png';
import chicken8 from '../images/chickennumba6.png';
import chicken9 from '../images/5.jpg';
import chicken11 from '../images/chicken11.png';
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
import mac from '../images/mac.jpg';
import shoefries from '../images/shoeFries.jpg';

export const data = {
  Sandwiches: [
    {
      tag: 'Specialty',
      name: 'Brooklyn Chop',
      price: 13.95,
      image: BrooklynChop,
      description:
        'Chopped Angus Beef, Applewood Smoked Bacon, Vermont Cheddar Cheese, American Cheese, Sauteed Onions, Shredded Lettuce, Sliced Ripe Tomato, honey BBQ, served on toasted Italian Hero.',
    },
    {
      tag: 'Specialty',
      name: `The "Sassinator"`,
      price: 12.95,
      image: Sassinator,
      description: `Philly Steak, 100% Angus Beef Burger, Crispy Bacon, Caramelized Red
      Onions, Swiss cheese, peppercorn aioli on a toasted Brioche Bun`,
    },
    {
      tag: 'Specialty',
      name: `Bacon Stack`,
      price: 7.99,
      image: BaconStack,
      description: `Double Cheesburger WIth Cheddar and Mozzarella Cheese, Stacked
    with Crispy Bacon, Topped off with Caramelized Onions & Chipotle
    Mayo Aioli`,
    },
    {
      tag: 'Specialty',
      name: `Philly Cheese Steak`,
      price: 9.99,
      image: Philly,
      description: `Steak, Provolone & American Cheese, Red & Green Peppers, Onions,
    and Mayo`,
    },
    {
      tag: 'Specialty',
      name: `BLT`,
      price: 9.99,
      image: Blt,
      description: `Bacon, Romaine Lettuce, Tomato & Mayo! Served on Toasted Bread!`,
    },
    {
      tag: 'Specialty',
      name: `Sassy's Mad Burger`,
      price: 9.99,
      image: MadBurger,
      description: `8oz Angus Beef Topped with Melted American Cheese, Crispy Bacon,
      Crispy Jumbo Onion Rings, Ketchup & Mayo. Served on Toasted
      Broiche Bun.`,
    },
    {
      tag: 'Specialty',
      name: `4. Gouda Meal`,
      price: 9.99,
      image: Gouda,
      description: `Crispy Chicken Cutlet, Chipotle gouda, Smoked Bacon, Lettuce,
      Tomato, topped off with Ketchup, & Ranch. We all agreed that it
      was a good meal. A really "Gouda Meal"!`,
    },
    {
      tag: 'Specialty',
      name: `7. Crispy Chicken Cutlet Parmigina`,
      price: 9.99,
      image: Parm,
      description: `Crispy Chicken Cutlet, Fresh Marinara Sauce, Melted Mozzarella,
      Parmesan Cheese, Basil. Served on Garlic Bread`,
    },
    {
      tag: 'Specialty',
      name: `The Spicy Mama`,
      price: 9.99,
      image: SpicyMama,
      description: `Salsalito Turkey Breast, Pepper-jack Cheese, Avocado, Jalapeno
      Peppers, Baby Spinach, Sliced Tomato, Mayonnaise`,
    },
    {
      tag: 'Specialty',
      name: `Regula Degula`,
      price: 9.99,
      image: Regula,
      description: `Ovengold Roasted Turkey, American Cheese, Smoked Bacon, Avocado,
      Leafy Lettuce, Tomato, Mayonnaise`,
    },
    {
      tag: 'Specialty',
      price: 9.99,
      image: QuickBite,
      name: `38. "Quik-Bite"`,
      description: `Maple Honey Turkey, Cheddar Cheese, Leafy Lettuce, Hot Cherry
      Peppers, Tomato, Mayonnaise`,
    },
    {
      tag: 'Specialty',
      price: 9.99,
      image: SmokeyMeunster,
      name: `Smokey Muenster`,
      description: `Smoked Mesquite Turkey Breast, Muenster cheese, Arugula, Creamy
      Russian, ripe tomato, red onion`,
    },
    {
      tag: 'Specialty',
      price: 9.99,
      image: Blank,
      name: `The Bourbon`,
      description: `Bourbon Smoked Boars Head Ham, Smoked Gouda Cheese, Caramalized
      Mushrooms, Onions, & Bell Peppers, BBQ & Mayo. Served on Toasted
      Garlic Bread`,
    },
    {
      tag: 'Specialty',
      price: 9.99,
      image: BrooklynBreak,
      name: `"The BKLYN" Breakfast`,
      description: `2 Eggs Scrambled, Grilled Pastrami, Vermont Sharp Cheddar
      Cheese, Fresh Baby Arugula, Sliced Tomato, White Onion, &
      Chipotle Mayo Aioli`,
    },
    {
      tag: 'Burgers',
      price: 9.99,
      image: macBurger,
      name: `Mac-n-Cheese Bacon Beef Burger`,
      description: `Cheddar burger topped with our creamy mac n cheese, bacon,
      sauteed onions, and BBQ sauce`,
    },
    {
      tag: 'Burgers',
      price: 9.99,
      image: Blank,
      name: `Impossible Burger`,
      description: `Quarter Pound Impossible burger Patty topped plant based
      cheddar, lettuce, tomato, onion, pickles, and vegan roasted
      pepper aioli`,
    },
    {
      tag: 'Burgers',
      price: 9.99,
      image: Blank,
      name: `100% Angus Beef Burger`,
      description: `100% Juicy Angus Beef Burger Topped With Leafy Lettuce, Sliced
      Tomato, Red Onion, and Pickles. Served on a Toasted Brioche Bun
      (Default is well done)`,
    },
    {
      tag: 'Burgers',
      price: 9.99,
      image: angusCheese,
      name: `100% Angus Cheeseburger`,
      description: `100% Juicy Angus Beef Burger Topped With Cheddar Cheese, Leafy
      Lettuce, Sliced Tomato, Red Onion, and Pickles. Served on a
      Toasted Brioche Bun (Default is well done)`,
    },
    {
      tag: 'Burgers',
      price: 9.99,
      image: baconCheese,
      name: `Bacon Cheese Burger`,
      description: `100% Juicy Angus Beef Burger Topped With Cheddar Cheese, Smoked
      Bacon Leafy Lettuce, Sliced Tomato, Red Onion, and Pickles.
      Served on a Toasted Brioche Bun (Default is well done)`,
    },
  ],
};

export const toppings = {
  Bread: [
    {
      name: 'Roll',
      price: 0.0,
    },
    {
      name: 'Ciabatta',
      price: 1.0,
    },
    {
      name: 'Hero',
      price: 1.25,
    },
    {
      name: 'Spinach & Herb',
      price: 1.0,
    },
    {
      name: 'garlicherb',
      price: 1.0,
    },
    {
      name: 'tomatobasil',
      price: 1.0,
    },
    {
      name: 'habanerosalsa',
      price: 1.0,
    },
    {
      name: 'wholewheat',
      price: 1.0,
    },
  ],
  Extras: [
    {
      name: 'Avocado',
      price: 2.0,
    },
    {
      name: 'Bacon',
      price: 2.0,
    },
    {
      name: 'Extra Meat',
      price: 3.0,
    },
    {
      name: 'Cheese',
      price: 1.0,
    },
    {
      name: 'Pickles',
      price: 0.5,
    },
    {
      name: 'Hot Cherry Pepper',
      price: 0.5,
    },
    {
      name: 'Sweet Roasted Pepper',
      price: 0.5,
    },
    {
      name: 'Baby Spinach',
      price: 0.5,
    },
    {
      name: 'Arugula',
      price: 0.5,
    },
    {
      name: 'Leafy Lettuce',
      price: 0.5,
    },
    {
      name: 'Red Onion',
      price: 0.5,
    },
    {
      name: 'White Onion',
      price: 0.5,
    },
    {
      name: 'Mushrooms',
      price: 0.75,
    },
  ],
};
