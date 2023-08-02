import React from "react";
import "./CreateProduct.scss";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu/AdminMenu";

const CreateProduct = () => {
  return (
    <Layout title={"Dashboard - Create Product - Alpha97 ECommerce"}>
      <div className="container">
        <div className="row">
          <div className="row-left">
            <AdminMenu />
          </div>
          <div className="row-right">
            <div className="card">
              <h1>Create Product</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
