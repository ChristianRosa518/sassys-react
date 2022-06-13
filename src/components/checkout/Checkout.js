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
      NameValid: false,
      AddressValid: false,
      CityValid: false,
      StateValid: false,
      ZipcodeValid: false,
    };

    this.handlePurchase = this.handlePurchase.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handlePurchase(e) {
    e.preventDefault();
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
            <form
              className={'checkout_Delivery'}
              onSubmit={this.handlePurchase}
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
              <input
                type="submit"
                value="Checkout"
                className={'checkout_Delivery_Button'}
              ></input>
              <Payment clientSecret={this.props.clientSecret} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function Payment(clientSecret) {
  const options = {
    clientSecret: clientSecret,
  };

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="payment">
      <PaymentElement />
    </div>
  );
}
