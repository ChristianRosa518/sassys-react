import $ from 'jquery';

$(document).ready(function () {
  console.log('running');
  var modalInformation = {
    BrooklynChop: {
      title: '- Brooklyn Chop -',
      description: `Chopped Angus Beef, Applewood Smoked Bacon, Vermont Cheddar Cheese,
            American Cheese, Sauteed Onions, Shredded Lettuce, Sliced Ripe
            Tomato, honey BBQ, served on toasted Italian Hero.`,
      image: '',
    },
  };

  var modal = document.getElementById('#modal');

  $('.itemCard').on('click', function () {
    console.log('clicked');
    $('.modal').addClass('visible');
  });
});
