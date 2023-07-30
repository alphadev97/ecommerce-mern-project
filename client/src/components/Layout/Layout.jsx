import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Alpha97 | E-Commerce",
  description: "Alpha97 | E-Commerce is a MERN Stack application",
  keywords: "mern, react, express, node, mongodb, alpha97, muhammad usama",
  author: "Muhammad Usama - Alpha97",
};

export default Layout;
