import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-left">
          <h1>LOGO</h1>
          <h2>Social Icons</h2>
        </div>

        <div className="footer-center">
          <h2>Important Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <h1>Contact Us</h1>
          <h2>Email</h2>
          <h2>Github</h2>
          <h2>Linkedin</h2>
        </div>
      </div>
      <div className="copyright">
        <p> &copy; Copyright Protected 2023, Made With ❤️ By Muhammad Usama </p>
      </div>
    </div>
  );
};

export default Footer;
