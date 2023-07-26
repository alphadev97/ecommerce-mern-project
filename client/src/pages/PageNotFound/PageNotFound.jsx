import React from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import pnf from "../../assets/pnf.jpg";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <Layout title={"404 Page Not Found - Alpha97 | E-Commerce"}>
      <div className="pnf">
        <h1>404</h1>
        <img src={pnf} alt="" />
        <h2>Looks Like You Are Lost</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
