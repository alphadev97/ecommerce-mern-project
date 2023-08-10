import React from "react";
import "./Dashboard.scss";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Dashboard - Alpha97 Ecommerce "}>
      <div className="dash-container">
        <div className="row">
          <div className="row-left">
            <UserMenu />
          </div>
          <div className="row-right">
            <div className="card">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
