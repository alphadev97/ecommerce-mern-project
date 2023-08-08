import React from "react";
import "./Search.scss";
import Layout from "../../components/Layout/Layout";
import { useSearch } from "../../context/search";

const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search Results - Alpha97 ECommerce"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
        </div>
        <div className="card-container">
          {values?.results.map((p) => (
            <div className="card" key={p._id}>
              <img
                src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}</p>
                <p className="card-text">${p.price}</p>
              </div>
              <div className="btn">
                <button>More Details</button>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
