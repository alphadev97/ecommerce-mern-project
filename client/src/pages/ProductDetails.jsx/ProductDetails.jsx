import React, { useState, useEffect } from "react";
import "./ProductDetails.scss";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  //   initial product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  // get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="product-container">
        <div className="pr-left">
          <img
            src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`}
            alt={product.name}
          />
        </div>
        <div className="pr-right">
          <h1>Product Details</h1>
          <h6>Name: {product.name}</h6>
          <h6>Description: {product.description}</h6>
          <h6>Price: {product.price}</h6>
          <h6>Category: {product.category?.name}</h6>
          <button>Add To Cart</button>
        </div>
      </div>
      <div className="sim-prod">Similiar Product</div>
    </Layout>
  );
};

export default ProductDetails;
