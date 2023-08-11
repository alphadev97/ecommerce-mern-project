import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import "./Home.scss";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../../components/Prices/Prices.jsx";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";
import { toast } from "react-hot-toast";
import logo from "../../assets/hero.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Filter by category

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  // Get all products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-get/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/product-count"
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/product-get/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // get filtered prducts
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/product/product-filter",
        { checked, radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"All Products - Best Offers - Alpha97 E-Commerce"}>
      <div className="hero">
        <div className="hero-left">
          <h1>Alpha97 E-Commerce</h1>
          <p>
            Crafted on the MERN Stack, our E-Commerce store embodies simplicity
            and sophistication. Merging MongoDB, Express.js, React, and Node.js,
            this platform seamlessly unites powerful database management, robust
            back-end processes, dynamic front-end interfaces, and efficient
            server-side operations. Through this convergence, we've established
            a feature-rich and user-friendly online store that ensures seamless
            shopping experiences across a wide array of products.
          </p>
        </div>
        <div className="hero-right">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="home">
        <div className="left">
          <h4>Filter By Category</h4>
          <div className="cat-filter">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* Price Filter */}
          <h4>Filter By Price</h4>
          <div className="cat-filter">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="cat-filter">
            <button
              className="reset-btn"
              onClick={() => window.location.reload()}
            >
              Reset Filters
            </button>
          </div>
        </div>
        <div className="right">
          <h1>All Products</h1>
          <div className="card-container">
            {products?.map((p) => (
              <div className="card" key={p._id}>
                <img
                  src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-price">${p.price}</p>
                  <p className="card-text">{p.description.substring(0, 30)}</p>
                </div>
                <div className="btn">
                  <button onClick={() => navigate(`/product/${p.slug}`)}>
                    More Details
                  </button>
                  <button
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item added to cart");
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="pag">
            {products && products.length < total && (
              <button
                className="pag-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading...." : "Load More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
