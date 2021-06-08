import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Footer.css";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="footer-container">
      {/* <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" onClick={toggleHome} className="social-logo">
              jed photography<b>!</b>
              {/* <i className="fab fa-typo3"></i> */}
            </Link>
          </div>
          <small className="website-rights">
            All Rights Reserved © {new Date().getFullYear()}
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/JedPhotos"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
