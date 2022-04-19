import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>About Us</h4>
        <p>Our mission is to give you the best experience </p>

      </div>

      <div className="midFooter">
        <h1>ALW Website.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Nguyen Tan Phuoc</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>

      </div>
    </footer>
  );
};

export default Footer;