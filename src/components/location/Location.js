import React from 'react';

import './Location.css';

export default function Location() {
  return (
    <div class="container">
      <h1>Sassy's Specialty Sandwiches Location</h1>
      <p>233 S 4th St Brooklyn, Ny 11211</p>
      <div class="map">
        <iframe
          title="Map"
          class="mapContainer"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3414872973794!2d-73.96097568434466!3d40.71049844564387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b401b0eaf5d%3A0x37b5815ac49bf98d!2sSassy&#39;s%20Specialty%20Sandwiches!5e0!3m2!1sen!2sus!4v1624836823342!5m2!1sen!2sus"
          width="800"
          height="600"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
