import React from "react";
import logo from "../../assets/HomePage/logo-min.png";
import fb from "../../assets/HomePage/fb-icon.svg";
import insta from "../../assets/HomePage/Icon awesome-instagram.svg";
import twitter from "../../assets/HomePage/Icon awesome-twitter.svg";
import linkedin from "../../assets/HomePage/Icon awesome-linkedin-in.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer-container ">
        <div className="logo ">
          <img className="contint_logo" src={logo} alt="logo" />
          <p className="info_link">info@continentaloverseaseducation.com</p>
          <p className="phone">+91 98462 77171</p>
          <div className="follow_us ">
            <h4>Follow Us:</h4>
            <a href="#">
              <img src={fb} alt="facebook" />
            </a>
            <a href="#">
              <img src={insta} alt="facebook" />
            </a>
            <a href="#">
              <img src={twitter} alt="facebook" />
            </a>
            <a href="#">
              <img src={linkedin} alt="facebook" />
            </a>
          </div>
        </div>
        <div className="company ">
          <h1>Company</h1>
          <a href="#">About Us</a>
          <a href="#">Location</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>
        <div className="resources">
          <h1>Resources</h1>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
          <a href="#">News</a>
        </div>
        <div className="support">
          <h1>Support</h1>
          <a href="#">Refund Policy</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Term of Use</a>
        </div>
      </div>

      <div className="credits">
        <p>
          © {new Date().getFullYear()} Continental India Pvt. Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
