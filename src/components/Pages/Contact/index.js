import React from 'react';
import './contact.css';
import photo from './photo/model.jpg';
import Fade from 'react-reveal/Fade';

function Contact() {
  const showSuccess = () => {
    alert('Thank you for contacting us!');
  };
  return (
    <>
      <div class="container">
        <main>
          <div class="text-container">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={showSuccess}
            >
              <input type="hidden" name="form-name" value="contact" />
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
                required
              />

              <label for="email">Email</label>
              <input
                id="emai"
                name="email"
                type="email"
                placeholder="Your Email.."
                required
              />

              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Say something.."
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
            <div class="contact-info">
              <div class="info-email">
                <b>CONTACT:</b>
                <ul class="info-list">
                  <li>E-mail:</li>
                  <li>jedphotography1@gmail.com</li>
                </ul>
                <ul class="info-list">
                  <li>Phone number:</li>
                  <li> (+63)977 821 8479</li>
                </ul>
              </div>
              <div class="info-social">
                <b>STAY UPDATED:</b>
                <ul class="info-list">
                  <li>Follow us on:</li>
                  <li>Facebook:</li>
                  <li>
                    <a
                      class="social-link"
                      href="https://www.facebook.com/JedPhotos"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @JedPhotos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Fade left>
          <div id="sidebar">
            <img class="contact-photographer" src={photo} alt="model"></img>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Contact;
