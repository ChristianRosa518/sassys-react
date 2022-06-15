import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import './Checkout.css';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Address: '',
      City: '',
      State: '',
      Zipcode: '',
      message: null,
      isLoading: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  setClientSecret(a) {
    this.setState({ clientSecret: a });
    console.log(a);
  }

  render() {
    return (
      <div>
        <div>
          <div className={'checkout_Billing_Container'}>
            <div
              className={'checkout_Delivery'}
              // onSubmit={this.handlePurchase}
            >
              <h2>Billing Information</h2>
              <label>
                Name
                <input
                  type="text"
                  value={this.state.Name}
                  onChange={this.handleInputChange}
                  name="Name"
                />
              </label>
              <label>
                Address
                <input
                  type="text"
                  value={this.state.Address}
                  onChange={this.handleInputChange}
                  name="Address"
                />
              </label>
              <label>
                City
                <input
                  type="text"
                  name="City"
                  value={this.state.City}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                State
                <input
                  type="text"
                  name="State"
                  value={this.state.State}
                  onChange={this.handleInputChange}
                />
              </label>
              <label>
                Zip
                <input
                  type="text"
                  name="Zipcode"
                  value={this.state.Zipcode}
                  onChange={this.handleInputChange}
                />
              </label>
              {this.props.price}
              <div className={'checkout_Card_Container'}></div>
              <Payment
                product={this.props.product}
                setMessage={this.setMessage}
                message={this.state.message}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Payment(props) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://localhost:3000/sassys-react/confirmed',
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  return (
    <div className="payment">
      <form onSubmit={handlePurchase}>
        <PaymentElement />
        {isLoading ? <div>loading</div> : 'Pay now'}
        {message && <div>{message}</div>}
        <input
          type="submit"
          value="Checkout"
          className={'checkout_Delivery_Button'}
        ></input>
      </form>
    </div>
  );
}
