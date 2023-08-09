import React from "react";
import "./CartPage.scss";
import Layout from "../../components/Layout/Layout";
import { useCart } from "../../context/cart";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  // delete item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Cart - Alpha97 ECommerce"}>
      <div className="cart-container">
        <div className="cart-details">
          <div className="cart-user">
            <h1>{`Hello ${auth?.token && auth?.user?.name}`}</h1>
            <h4>
              {cart?.length > 1
                ? `You have ${cart.length} items in your cart ${
                    auth?.token ? "" : "please login to checkout"
                  }`
                : "Your cart is empty"}
            </h4>
          </div>
        </div>
        <div className="cart">
          <div className="cart-item">
            {cart?.map((p) => (
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
                  <button onClick={() => removeCartItem(p._id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout">
            <h1>checkout</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
