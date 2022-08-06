import { Wrapper, Status } from '@googlemaps/react-wrapper';

import './Location.css';
import Map from './Map';

const render = (status) => {
  if (status === Status.LOADING) return <h3>{status} ..</h3>;
  if (status === Status.FAILURE) return <h3>{status} ...</h3>;
  return null;
};

export default function Location(props) {
  const mapCenter = { lat: 40.7140408311635, lng: -73.95525507045573 };
  const center = { lat: 40.71060416957451, lng: -73.95878700221677 };
  const zoom = 13;

  return (
    <div className="container" ref={props.locationScroll} id={'location'}>
      <div className="h">
        <div className="locTitle">
          <h2>Store Location</h2>
          <p>233 S 4th St Brooklyn, Ny 11211</p>
          <p>Polygon is the Delivery Radius</p>
        </div>
        <div className="map">
          <Wrapper
            apiKey={'AIzaSyAyQo5E9RoTnz7324q_pqNjjxInO6liZho'}
            render={render}
          >
            <div className="bigMap">
              <div className="mapInfo">
                <h3>Hours</h3>
                <div className="schedule">
                  <div className="hours">
                    <div className="day">
                      <p>Monday</p>
                    </div>
                    <div className="time">
                      <p>Closed</p>
                    </div>
                  </div>
                  <div className="hours">
                    <div className="day">
                      <p>Tuesday - Saturday</p>
                    </div>
                    <div className="time">
                      <p>11am - 8pm</p>
                    </div>
                  </div>

                  <div className="hours">
                    <div className="day">
                      <p>Sunday</p>
                    </div>
                    <div className="time">
                      <p>11am - 7pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <Map mapCenter={mapCenter} center={center} zoom={zoom}></Map>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
