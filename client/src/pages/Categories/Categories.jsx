import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";
import Layout from "../../components/Layout/Layout";
import useCategory from "../../hooks/useCategory";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <div className="category">
          {categories.map((c) => (
            <div className="cat-btn" key={c._id}>
              <Link className="cat-link" to={`/category/${c.slug}`}>
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
