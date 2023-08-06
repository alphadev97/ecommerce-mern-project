import React from "react";
import "./Products.scss";
import AdminMenu from "../../components/Layout/AdminMenu/AdminMenu";
import Layout from "../../components/Layout/Layout";

const Products = () => {
  return (
    <Layout>
      <div className="products_container">
        <div className="row">
          <div className="row-left">
            <AdminMenu />
          </div>
          <div className="row-right">
            <h1>All Products List</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
