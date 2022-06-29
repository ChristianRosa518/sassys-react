import React from 'react';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

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
              <div className="checkout_Price">Total : {this.props.price}</div>
              <div className={'checkout_Card_Container'}></div>
              <Payment
                price={this.props.price}
                clientSecret={this.props.clientSecret}
                product={this.props.product}
                setMessage={this.setMessage}
                message={this.state.message}
                orderInformation={this.props.orderInformation}
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
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const productinformation = props.product;
  const template = {};

  function orderInformation() {
    for (let i = 0; i < props.product.length; i++) {
      let value = `Order${[i]}`;
      // let addons = `Add-ons${[i]}`;
      Object.assign(template, { [value]: productinformation[i].title });
      // Object.assign(template, { [addons]: productinformation[i].addons });
    }
    emailjs
      .send(
        'service_1d6oo6u',
        'template_tqxgooo',
        template,
        'F7eoeUPRLaGd4Yx7q'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  function finishedOrder() {
    navigate('/confirmed', { replace: true });
    window.location.reload(false);
  }

  const handlePurchase = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    await stripe
      .confirmPayment({
        elements,

        redirect: 'if_required',
      })
      .then(function (result) {
        if (result.error) {
          console.log('failed');
        } else {
          console.log('success');
          // orderInformation();
          finishedOrder();
        }
      });

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
        <div className="payment_Handler">
          {isLoading ? <div>loading</div> : 'Confirm Payment'}
          {message && <div>{message}</div>}

          <input
            type="submit"
            value="Checkout"
            className={'checkout_Delivery_Button'}
          ></input>
        </div>
      </form>
    </div>
  );
}
