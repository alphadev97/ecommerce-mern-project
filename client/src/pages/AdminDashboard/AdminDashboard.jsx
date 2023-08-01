import React from "react";
import "./AdminDashboard.scss";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu/AdminMenu";

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="row-left">
            <AdminMenu />
          </div>
          <div className="row-right">Content</div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
