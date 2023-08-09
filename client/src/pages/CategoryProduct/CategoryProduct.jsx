import React, { useState, useEffect } from "react";
import "./CategoryProduct.scss";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const CategoryProduct = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getProductByCategory();
  }, [params?.slug]);

  const getProductByCategory = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <h4>Category - {category?.name}</h4>
        <h6>{products.length} results found</h6>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
