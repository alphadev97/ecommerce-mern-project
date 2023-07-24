import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>

        <div className="header-center">
          <ul className="navbar">
            <li className="navbar-item">
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="link" to="/register">
                Register
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="link" to="/cart">
                Cart(0)
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
