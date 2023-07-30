import React from "react";
import "./Register.scss";
import Layout from "../../components/Layout/Layout";

const Register = () => {
  return (
    <Layout title={"Register - Alpha97 Ecommerce"}>
      <div className="register">
        <h1>Register Page</h1>
        <form>
          <div className="container">
            <input type="text" placeholder="Enter Your Name" />

            <input type="email" placeholder="Enter Your Email Address" />

            <input type="password" placeholder="Enter Your Password" />

            <input type="text" placeholder="Enter Your Phone No." />

            <input type="text" placeholder="Enter Your Address" />

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
