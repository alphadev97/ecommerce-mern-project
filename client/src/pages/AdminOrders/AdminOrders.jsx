import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminOrders.scss";
import AdminMenu from "../../components/Layout/AdminMenu/AdminMenu";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delievered",
    "Cancel",
  ]);
  const [changeStatus, setChangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios(
        "http://localhost:8080/api/v1/auth/all-orders"
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8080/api/v1/auth/order-status/${orderId}`,
        { status: value }
      );
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"All Orders Data - Alpha97 ECommerce"}>
      <div className="admin-orders">
        <div className="left">
          <AdminMenu />
        </div>
        <div className="right">
          <h1>All Orders</h1>
          {orders?.map((o, i) => {
            return (
              <div>
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buyer</th>
                      <th scope="col">Date</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>
                        <Select
                          bordered={false}
                          onChange={(value) => handleChange(o._id, value)}
                          defaultValue={o?.status}
                        >
                          {status.map((s, i) => (
                            <Option key={i} value={s}>
                              {s}
                            </Option>
                          ))}
                        </Select>
                      </td>
                      <td>{o?.buyer?.name}</td>
                      <td>{moment(o?.createdAt).fromNow()}</td>
                      <td>{o?.payment.success ? "Success" : "Faild"}</td>
                      <td>{o?.products?.length}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="product">
                  {o?.products?.map((p, i) => (
                    <div className="items">
                      <div className="item-img">
                        <img
                          src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                          alt={p.name}
                          width={"200px"}
                          height={"200px"}
                        />
                      </div>
                      <div className="item-det">
                        <h4>{p.name}</h4>
                        <p>{p.description.substring(0, 30)}</p>
                        <h4>${p.price}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;
