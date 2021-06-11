import React from 'react';
import './about.css';
import photo from './photo/whitedress.jpg';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <>
      <div class="container">
        <main>
          <div class="text-container">
            <h3>Welcome to jed photography!</h3>
            <br />
            <p class="about-paragraph">
              Great you are here! I am a Professional Photographer and my
              passion is capturing your precious moments. It is always a great
              experience when I am allowed to accompany people with my camera on
              any special day.
              <br />
              <br />
              Because my job is to make your most precious moments immortal and
              timeless. I come from the Philippines and I am open to any trip
              and can accompany you everywhere, here are the services I offer.
            </p>
            <ul class="about-list">
              <li>Wedding + Photo</li>
              <li>Fashion + Modeling</li>
              <li>Beauty</li>
              <li>Birthday's</li>
              <li>Corporate event</li>
              <li>Commercial Product</li>
              <li>Nature</li>
              <li>HDR</li>
              <li>Travel</li>
            </ul>
          </div>
        </main>
        <Fade left>
          <div id="sidebar" class="about-sidebar">
            <img class="about-photographer" src={photo} alt="whitedress"></img>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default About;
