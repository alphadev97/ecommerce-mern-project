import React, { useState, useEffect } from "react";
import "./Orders.scss";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu/UserMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios("http://localhost:8080/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders - Alpha97 Ecommerce"}>
      <div className="order-container">
        <div className="row">
          <div className="row-left">
            <UserMenu />
          </div>
          <div className="row-right">
            <div className="card">
              <h1>Your Orders</h1>
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
                          <td>{o?.status}</td>
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
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
