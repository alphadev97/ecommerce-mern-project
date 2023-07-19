import React, { Fragment } from "react";
import "./LoginSignUp.scss";
import Loader from "../layout/Loader/Loader";

const LoginSignUp = () => {
  return (
    <div>
      <Fragment>
        <div className="LoginSignUpContainer">
          <div className="LoginSignUpBox">
            <div>
              <div className="login_signup_toggle">
                <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
              </div>
              <button ref={switcherTab}></button>
            </div>
            <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
              <div className="loginEmail">
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={loginEmail}
                />
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default LoginSignUp;
