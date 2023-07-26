import React from "react";
import Layout from "../../components/Layout/Layout";
import policyImg from "../../assets/policy.jpg";
import "./Policy.scss";

const Policy = () => {
  return (
    <Layout title={"Policy - Alpha97 | E-Commerce"}>
      <h1 className="ph1">Policy</h1>
      <div className="policy">
        <div className="policy-left">
          <img src={policyImg} alt="" />
        </div>

        <div className="policy-right">
          <h2>Our Policy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing, elit sed <br />
            venenatis varius sapien quam dignissim, leo tempus nostra velit
            <br />
            facilisis. Ad mi eros dapibus eget sagittis per enim bibendum <br />
            rhoncus vehicula, mus fringilla cras gravida sollicitudin lectus
            <br />
            morbi convallis. Vivamus id nec tristique faucibus lacinia egestas
            <br />
            curabitur class aliquet convallis, varius arcu semper aenean dis non
            <br />
            nulla ultricies nullam, a sagittis sapien diam taciti nisl fringilla
            <br />
            massa sodales.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
