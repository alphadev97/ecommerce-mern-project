import React from "react";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/appstore.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <p>Download our App for Android and IOS</p>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="appstore" />
      </div>

      <div className="midFooter">
        <h2>Alpha97 - Ecommerce</h2>
        <p>High quality is our first priority</p>
        <p>Copyright Protected 2023 &copy; Alpha97</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://github.com/usamadev97/">GitHub</a>
        <a href="https://www.linkedin.com/in/usamadev/">LinkeDin</a>
        <a href="mailto:muhammadusama30289@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
