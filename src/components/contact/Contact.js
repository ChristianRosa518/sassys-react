import React from 'react';

import './container.css';

export default function Contact() {
  return (
    <div class="containerModal">
      <form
        action="mailto:chedic518@gmail.com"
        method="POST"
        enctype="text/plain"
      >
        <h1>Contact Us!</h1>
        <div class="formItem">
          <div class="labelColumn">
            <label for="name">Name</label>
          </div>
          <input type="text" name="name" placeholder="first/last" />
        </div>
        <div class="formItem">
          <div class="labelColumn">
            <label for="mail">E-mail</label>
          </div>
          <input type="text" name="mail" />
        </div>
        <div class="formItem">
          <div class="labelColumn">
            <label for="phone">Phone Number</label>
          </div>
          <input type="text" name="phone" />
        </div>
        <div class="formItem">
          <div class="labelColumn">
            <label for="comment">Comment</label>
          </div>
          <textarea name="comment" id=""></textarea>
        </div>

        <div class="submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
