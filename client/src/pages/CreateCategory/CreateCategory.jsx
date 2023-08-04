import React, { useEffect, useState } from "react";
import "./CreateCategory.scss";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  // handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/category/create-category",
        { name }
      );
      if (data.success) {
        toast.success(`${name} is created!`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong un input form");
    }
  };

  // get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout title={"Dashboard - Create Category - Alpha97 ECommerce"}>
      <div className="container">
        <div className="row">
          <div className="row-left">
            <AdminMenu />
          </div>
          <div className="row-right">
            <div className="card">
              <h1>Create Category</h1>
              <div>
                <CategoryForm
                  handleSubmit={handleSubmit}
                  value={name}
                  setValue={setName}
                />
              </div>
              <h1>Manage Category</h1>
              <div className="table">
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories?.map((c) => (
                        <>
                          <tr>
                            <td key={c._id}>{c.name}</td>
                            <td>
                              <button className="btn">Edit</button>
                              <button className="btn-danger">Delete</button>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
