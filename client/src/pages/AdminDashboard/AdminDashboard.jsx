import React from "react";
import "./AdminDashboard.scss";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="admin-container">
        <div className="row">
          <div className="row-left">
            <AdminMenu />
          </div>
          <div className="row-right">
            <div className="card">
              <h3>Admin Name: {auth?.user?.name}</h3>
              <h3>Admin Email: {auth?.user?.email}</h3>
              <h3>Admin Contact: {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
