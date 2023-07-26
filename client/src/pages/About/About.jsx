import React from "react";
import Layout from "../../components/Layout/Layout";
import aboutImg from "../../assets/about.jpg";
import "./About.scss";

const About = () => {
  return (
    <Layout title={"About Us - Alpha97 | E-Commerce"}>
      <h1 className="ah1">About Us</h1>
      <div className="about">
        <div className="about-left">
          <img src={aboutImg} alt="" />
        </div>

        <div className="about-right">
          <h2>About Alpha97 | E-Commerce</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing, elit sed <br />
            venenatis varius sapien quam dignissim, leo tempus nostra velit{" "}
            <br />
            facilisis. Ad mi eros dapibus eget sagittis per enim bibendum <br />
            rhoncus vehicula, mus fringilla cras gravida sollicitudin lectus{" "}
            <br />
            morbi convallis. Vivamus id nec tristique faucibus lacinia egestas{" "}
            <br />
            curabitur class aliquet convallis, varius arcu semper aenean dis non{" "}
            <br />
            nulla ultricies nullam, a sagittis sapien diam taciti nisl fringilla{" "}
            <br />
            massa sodales.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
