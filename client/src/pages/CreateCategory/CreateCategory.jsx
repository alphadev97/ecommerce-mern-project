import React from "react";
import "./CreateCategory.scss";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu/AdminMenu";

const CreateCategory = () => {
  return (
    <Layout title={"Dashboard - Create Category - Alpha97 ECommerce"}>
      <div className="container">
        <div className="row">
          <div className="row-left">
            <AdminMenu />
          </div>
          <div className="row-right">
            <div className="card">
              <h1>Create Category</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
