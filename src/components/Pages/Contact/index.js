import React from "react";
import "./contact.css";
import photo from "./photo/model.jpg";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <>
      <div class="container">
        <main>
          <div class="text-container">
            <form>
              <label for="fname">Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                required
              />

              <label for="lname">Email</label>
              <input
                id="lname"
                name="lastname"
                type="email"
                placeholder="Your Email.."
                required
              />

              <label for="subject">Message</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Say something.."
                required
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
            <div class="contact-info">
              <div class="info-email">
                <b>Contact:</b>
                <ul class="info-list">
                  <li>e-mail:</li>
                  <li>jedphotography1@gmail.com</li>
                </ul>
                <ul class="info-list">
                  <li>phone number:</li>
                  <li> (+63)977 821 8479</li>
                </ul>
              </div>
              <div class="info-social">
                <b>Stay updated:</b>
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
