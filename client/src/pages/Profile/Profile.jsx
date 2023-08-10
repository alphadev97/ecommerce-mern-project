import React, { useState, useEffect } from "react";
import "./Profile.scss";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu/UserMenu";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  // context
  const [auth, setAuth] = useAuth();

  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // get user details

  // Form Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layout title={"Profile - Alpha97 Ecommerce"}>
      <div className="profile-container">
        <div className="row">
          <div className="row-left">
            <UserMenu />
          </div>
          <div className="row-right">
            <div className="update">
              <form onSubmit={handleSubmit}>
                <h1>User Profile</h1>
                <div className="container">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    placeholder="Enter Your Phone No."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />

                  <button type="submit">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
