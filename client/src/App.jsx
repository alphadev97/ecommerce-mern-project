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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>

        <Route path="/register" element={<Register />} />
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
