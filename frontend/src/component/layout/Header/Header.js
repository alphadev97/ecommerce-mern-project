import React from "react";
import "./Header.scss";
import Logo from "../../../images/logo.png";
import { BiUserCircle, BiSearch, BiCartAlt } from "react-icons/bi";

const Header2 = () => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      <div className="icons">
        <a href="/login">
          <BiUserCircle />
        </a>
        <a href="/">
          <BiSearch />
        </a>
        <a href="/">
          <BiCartAlt />
        </a>
      </div>
    </div>
  );
};

export default Header2;
