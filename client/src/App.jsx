import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Policy from "./pages/Policy/Policy";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { PrivateRoute } from "./components/Routes/Private";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import { AdminRoute } from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import CreateCategory from "./pages/CreateCategory/CreateCategory";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Users from "./pages/Users/Users";
import Orders from "./pages/Orders/Orders";
import Profile from "./pages/Profile/Profile";
import Products from "./pages/Products/Products";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import Search from "./pages/Search/Search";
import ProductDetails from "./pages/ProductDetails.jsx/ProductDetails";
import Categories from "./pages/Categories/Categories";
import CategoryProduct from "./pages/CategoryProduct/CategoryProduct";
import CartPage from "./pages/Cart/CartPage";
import AdminOrders from "./pages/AdminOrders/AdminOrders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
