import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "./Home.scss";
import axios from "axios";

const Home = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout title={"All Products - Best Offers - Alpha97 E-Commerce"}>
      <div className="home">
        <div className="left">
          <h4>Filter By Category</h4>
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
