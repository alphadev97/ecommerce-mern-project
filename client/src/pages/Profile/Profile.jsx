import React from "react";
import "./Profile.scss";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu/UserMenu";

const Profile = () => {
  return (
    <Layout title={"Profile - Alpha97 Ecommerce"}>
      <div className="container">
        <div className="row">
          <div className="row-left">
            <UserMenu />
          </div>
          <div className="row-right">
            <div className="card">
              <h1>Profile</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
