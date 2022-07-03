import axios from 'axios';
import React from 'react';

import '../checkout/Checkout.css';
const API_KEY = process.env.REACT_APP_GEOCODE;

class GoogleGeocode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Address: '', // 233 South 4th St
      Zipcode: '', // 11211
      City: '', // Brooklyn
      Location: 'placeholder',
      Delivery: false,
      Pickup: true,
    };

    this.CheckLocation = this.CheckLocation.bind(this);
    this.geocode = this.geocode.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  geocode(e) {
    e.preventDefault();
    axios
      .get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: this.state.Address + this.state.City + this.state.Zipcode,
          key: API_KEY,
        },
      })
      .then((response) => {
        var local = response.data.results[0].geometry.location;
        this.CheckLocation(local);
      })

      .catch((error) => {
        console.log(error);
      });
  }
  CheckLocation(local) {
    const position = new google.maps.LatLng(local.lat, local.lng);

    const coordsMap: google.maps.LatLngLiteral[] = [
      { lat: 40.698368338470225, lng: -73.98564910894787 },
      { lat: 40.69866554506028, lng: -73.9568281173706 },
      { lat: 40.70428236757431, lng: -73.9481162817999 },
      { lat: 40.71193901146775, lng: -73.94047737121582 },
      { lat: 40.7304783951045, lng: -73.95150661468506 },
      { lat: 40.73586254432281, lng: -73.95508495006308 },
      { lat: 40.72955373901099, lng: -73.95920482310996 },
    ];
    const deliveryRadius = new google.maps.Polygon({
      paths: coordsMap,
    });
    if (google.maps.geometry.poly.containsLocation(position, deliveryRadius)) {
      alert('check!');
    } else {
      alert('false!');
    }
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleCheckboxChange(e) {
    const target = e.target;
    const value = target.checked;
    const name = target.name;
    if (e.target.name === 'Pickup') {
      this.setState({ Delivery: false });
      this.setState({
        [name]: value,
      });
    } else if (e.target.name === 'Delivery') {
      this.setState({ Pickup: false });
      this.setState({
        [name]: value,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="checkout_Label_Container">
          <div className="checkout_Label">
            <label>
              Pickup
              <span
                className={`${
                  this.state.Pickup ? 'checkout_Label_SpanClicked' : ''
                }`}
              />
              <input
                type="radio"
                name="Pickup"
                checked={this.state.Pickup}
                onChange={this.handleCheckboxChange}
              />
            </label>
          </div>
          <div className="checkout_Label">
            <label>
              Delivery
              <input
                type="radio"
                name="Delivery"
                checked={this.state.Delivery}
                onChange={this.handleCheckboxChange}
              />
              <span
                className={`${
                  this.state.Delivery ? 'checkout_Label_SpanClicked' : ''
                }`}
              />
            </label>
          </div>
        </div>
        {this.state.Delivery && (
          <div className={'checkout_Delivery'}>
            <h2>Please enter your delivery address</h2>
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
              Zip
              <input
                type="text"
                name="Zipcode"
                value={this.state.Zipcode}
                onChange={this.handleInputChange}
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
            {/* <div>
              <button
                onClick={this.geocode}
                className={'checkout_Delivery_Button'}
              >
                Verify Address
              </button>
            </div> */}
          </div>
        )}
      </div>
    );
  }
}

export default GoogleGeocode;
