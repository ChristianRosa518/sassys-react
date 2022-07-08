import React from 'react';

import './container.css';

export default function Contact() {
  return (
    <div className="containerModal">
      <form
        action="mailto:chedic518@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <h1>Contact Us!</h1>
        <div className="formItem">
          <div className="labelColumn">
            <label htmlFor="name">Name</label>
          </div>
          <input type="text" name="name" placeholder="first/last" />
        </div>
        <div className="formItem">
          <div className="labelColumn">
            <label htmlFor="mail">E-mail</label>
          </div>
          <input type="text" name="mail" />
        </div>
        <div className="formItem">
          <div className="labelColumn">
            <label htmlFor="phone">Phone Number</label>
          </div>
          <input type="text" name="phone" />
        </div>
        <div className="formItem">
          <div className="labelColumn">
            <label htmlFor="comment">Comment</label>
          </div>
          <textarea name="comment" id=""></textarea>
        </div>

        <div className="submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
