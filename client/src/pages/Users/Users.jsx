import React from "react";
import "./Users.scss";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu/AdminMenu";

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users - Alpha97 ECommerce"}>
      <div className="container">
        <div className="row">
          <div className="row-left">
            <AdminMenu />
          </div>
          <div className="row-right">
            <div className="card">
              <h1>Users</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
