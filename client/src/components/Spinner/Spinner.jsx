import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Spinner.scss";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <>
      <div className="body">
        <div className="loader">Loading...</div>
        <h1 className="Text-center">redirecting to you in {count} second!</h1>
      </div>
    </>
  );
};

export default Spinner;
