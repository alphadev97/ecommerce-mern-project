import React, { useState, useEffect } from "react";
import "./UpdateProduct.scss";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [id, setId] = useState("");

  // Get single product

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setCategory(data.product.category._id);
      setQuantity(data.product.quantity);
      setShipping(data.product.shipping);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);

  // Get all category

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
      toast.error("Something went wrong in getting category");
    }
  };

  // create product function

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("category", category);
      photo && productData.append("photo", photo);
      productData.append("shipping", shipping);
      const { data } = axios.put(
        `http://localhost:8080/api/v1/product/update-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // Delete product

  const handleDelete = async () => {
    try {
      let answer = window.prompt(
        "Are you sure you want to delete this product?"
      );

      if (!answer) return;
      const { data } = axios.delete(
        `http://localhost:8080/api/v1/product/delete-product/${id}`
      );
      toast.success("Product Deleted Successfully");
      navigate("/dashboard/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Product - Alpha97 ECommerce"}>
      <div className="container">
        <div className="row">
          <div className="row-left">
            <AdminMenu />
          </div>
          <div className="row-product">
            <div className="card-product">
              <h1>Update Product</h1>
              <div className="category">
                <Select
                  className="select"
                  bordered={false}
                  placeholder={"Select a Category"}
                  size="large"
                  showSearch
                  onChange={(value) => {
                    setCategory(value);
                  }}
                  value={category}
                >
                  {categories?.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>

                <div className="photo">
                  <label>
                    {photo ? photo.name : "Upload Photo"}
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                <div>
                  {photo ? (
                    <div>
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="product photo"
                        height={"200px"}
                      />
                    </div>
                  ) : (
                    <div>
                      <img
                        src={`http://localhost:8080/api/v1/product/product-photo/${id}`}
                        alt="product photo"
                        height={"200px"}
                      />
                    </div>
                  )}
                </div>
                <div className="product-input">
                  <input
                    type="text"
                    value={name}
                    placeholder="Write a name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="product-input">
                  <textarea
                    type="text"
                    value={description}
                    placeholder="Write a description"
                    rows="4"
                    cols="50"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="product-input">
                  <input
                    type="number"
                    value={price}
                    placeholder="Write Price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="product-input">
                  <input
                    type="number"
                    value={quantity}
                    placeholder="Write Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="product-input">
                  <Select
                    bordered={false}
                    placeholder={"Select Shipping"}
                    size="large"
                    showSearch
                    className="select"
                    onChange={(value) => {
                      setShipping(value);
                    }}
                    value={shipping ? "Yes" : "No"}
                  >
                    <Option value="0">No</Option>
                    <Option value="1">Yes</Option>
                  </Select>
                </div>
                <div className="product-input">
                  <button onClick={handleUpdate}>Update Product</button>
                </div>
                <div className="product-input">
                  <button className="delete" onClick={handleDelete}>
                    Delete Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;
