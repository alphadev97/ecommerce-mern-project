import React from "react";
import "./Orders.scss";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu/UserMenu";

const Orders = () => {
  return (
    <Layout title={"Your Orders - Alpha97 Ecommerce"}>
      <div className="container">
        <div className="row">
          <div className="row-left">
            <UserMenu />
          </div>
          <div className="row-right">
            <div className="card">
              <h1>Your Orders</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
