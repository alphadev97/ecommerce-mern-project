import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.scss";
import Product from "./Product.js";

const product = {
  name: "Blue Shirt",
  images: [
    {
      url: "https://i5.walmartimages.com/asr/3c92c819-468f-4edd-8098-551a16ea9f1c.a8809b55a1038c8f51139443cd9e92db.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
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
