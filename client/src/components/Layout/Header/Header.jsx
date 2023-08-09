import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Header.scss";
import { useAuth } from "../../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../../Form/SearchInput";
import useCategory from "../../../hooks/useCategory";
import { useCart } from "../../../context/cart";
import { Badge } from "antd";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

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
            <SearchInput />
            <li className="navbar-item">
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <ul className="dropdown">
              <Link className={"link"} to="/categories">
                Categories
              </Link>
              <li className="dropdown-content">
                <Link to="/categories">All Categories</Link>
                {categories?.map((c) => (
                  <Link to={`/category/${c.slug}`} key={c._id}>
                    {c.name}
                  </Link>
                ))}
              </li>
            </ul>

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
                <ul className="dropdown">
                  <NavLink className={"link"} to="#">
                    {auth?.user?.name}
                  </NavLink>
                  <li className="dropdown-content">
                    <NavLink
                      className={"d-link"}
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                    >
                      Dashboard
                    </NavLink>
                    <NavLink
                      className={"d-link"}
                      to={"/login"}
                      onClick={handleLogOut}
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </>
            )}
            <li className="navbar-item">
              <Badge count={cart?.length} showZero>
                <NavLink className="link" to="/cart">
                  Cart
                </NavLink>
              </Badge>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
