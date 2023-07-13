import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.scss";

const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to Alpha97 - Ecommerce</p>
        <h1>Find Amazing Products Here</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
    </Fragment>
  );
};

export default Home;
