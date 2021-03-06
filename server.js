const port = process.env.PORT || 5000;
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

// Keys
const stripeSecret = process.env.REACT_APP_SECRET_KEY;

const stripe = require('stripe')(stripeSecret);
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

const calculateOrderAmount = (items) => {
  let dollarUS = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  let value = items;
  value = value.slice(1).replace('.', '');
  value = parseInt(value);
  value = value * 0.0108875;
  let amount = dollarUS.format(value);
  amount = amount.slice(1).replace('.', '');
  amount = parseInt(amount);

  if (value <= 1) {
    var number = 100;
  } else {
    number = amount;
  }
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
