import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "./Home.scss";

const Home = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  return (
    <Layout title={"All Products - Best Offers - Alpha97 E-Commerce"}>
      <div className="home">
        <div className="left">
          <h6>Filter By Category</h6>
        </div>
        <div className="right">
          <h1>All Products</h1>
          <div className="products">
            <h1>products</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
