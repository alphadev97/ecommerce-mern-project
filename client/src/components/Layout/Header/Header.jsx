import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Header.scss";
import { useAuth } from "../../../context/auth";
import toast from "react-hot-toast";

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

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
              <NavLink className="link" to="/category">
                Category
              </NavLink>
            </li>
            {!auth.user ? (
              <>
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
              </>
            ) : (
              <>
                <li className="navbar-item">
                  <NavLink onClick={handleLogOut} className="link" to="/login">
                    Logout
                  </NavLink>
                </li>
              </>
            )}
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
