import React from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISH_KEY);

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      clientSecret: process.env.REACT_APP_SECRET_KEY,
    };
  }
  render() {
    return (
      <div>
        <div>
          <Elements stripe={stripePromise} options={this.options}></Elements>
        </div>
      </div>
    );
  }
}
