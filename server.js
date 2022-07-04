const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Keys
const stripeSecret = process.env.REACT_APP_SECRET_KEY;

const stripe = require('stripe')(stripeSecret);
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

const calculateOrderAmount = (items) => {
  let value = items;
  value = value.slice(1).replace('.', '');
  value = parseInt(value);

  console.log('hi');

  if (value <= 1) {
    var number = 100;
  } else {
    number = value;
  }
  console.log(number);
  return number;
};

app.post('/create-payment-intent', async (req, res) => {
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 100,
    currency: 'usd',
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    paymentIntent: paymentIntent.id,
  });
});

app.post('/update-payment-intent', async (req) => {
  const { price, info } = req.body;

  console.log(info);
  console.log(price);

  await stripe.paymentIntents.update(info, {
    amount: calculateOrderAmount(price),
  });
});

app.listen(port, () => console.log(`Node server listening on port ${port}!`));
