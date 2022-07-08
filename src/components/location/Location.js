import { Wrapper, Status } from '@googlemaps/react-wrapper';

import './Location.css';
import Map from './Map';

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

export default function Location() {
  const mapCenter = { lat: 40.7140408311635, lng: -73.95525507045573 };
  const center = { lat: 40.71060416957451, lng: -73.95878700221677 };
  const zoom = 14;

  return (
    <div className="container">
      <h1>Sassy's Specialty Sandwiches Location</h1>
      <p>233 S 4th St Brooklyn, Ny 11211</p>
      <p>Polygon is the Delivery Radius</p>
      <div className="map">
        <Wrapper
          apiKey={'AIzaSyAyQo5E9RoTnz7324q_pqNjjxInO6liZho'}
          render={render}
        >
          <div className="bigMap">
            <Map
              mapCenter={mapCenter}
              center={center}
              zoom={zoom}
              style={{ height: '100%', width: '100%' }}
            ></Map>
          </div>
          <div className="smallMap">
            <Map
              mapCenter={mapCenter}
              center={center}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
            ></Map>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
