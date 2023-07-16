import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.scss";
import Product from "./Product.js";

const product = {
  name: "Blue Shirt",
  images: [
    {
      url: "https://mustafaadmani.pk/cdn/shop/products/mustafaadmanishirts-053.jpg?v=1655375838",
    },
  ],
  price: "Rs.3000",
  _id: "alpha97",
};

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

      <h2 className="homeHeading">Featured Product</h2>

      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
