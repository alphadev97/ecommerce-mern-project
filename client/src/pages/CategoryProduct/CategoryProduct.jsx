import React, { useState, useEffect } from "react";
import "./CategoryProduct.scss";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
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
        <div className="card-container">
          {products?.map((p) => (
            <div className="card" key={p._id}>
              <img
                src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}</p>
                <p className="card-text">${p.price}</p>
              </div>
              <div className="btn">
                <button onClick={() => navigate(`/product/${p.slug}`)}>
                  More Details
                </button>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
