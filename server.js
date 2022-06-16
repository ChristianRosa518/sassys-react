const express = require('express');
const app = express();
const path = require('path');
// const stripe = require('stripe')(
//   'sk_test_51L273aBV3Tp8xOImETPF6Zrbjjje3GcmZeVOAc7C2CDBEaFxEAVfNhCKbwJXYchTnLaP6xWllJVhS3pBoyP2CA8V00sLoYZEQj'
// );
const port = process.env.PORT || 5000;

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

const calculateOrderAmount = (items) => {
  if (items <= 1) {
    var number = 100;
  } else {
    number = items;
  }
  console.log(number);
  return number;
};

// app.post('/create-payment-intent', async (req, res) => {
//   const { items } = req.body;

//   Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: 'usd',
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

app.listen(port, () => console.log('Node server listening on port 4242!'));
