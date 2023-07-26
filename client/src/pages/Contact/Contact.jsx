import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Contact.scss";
import contactImg from "../../assets/contact.jpg";
import { BiMap, BiPhoneCall, BiLink } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Layout title={"Contact Us - Alpha97 | E-Commerce"}>
      <h1 className="ch1">Contact Us</h1>
      <div className="contact">
        <div className="contact-left">
          <img src={contactImg} alt="" />
        </div>

        <div className="contact-right">
          <h2>Feel Free To Contact Us!</h2>
          <p className="cList">
            <BiMap /> 123 Any Street, Anywhere City, ST, 12345.
          </p>
          <p className="cList">
            <BiPhoneCall /> +123 456 789
          </p>
          <p className="cList">
            <MdEmail /> hello@anywebsite.com
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
