import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/AuthStyles.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useAuth } from "../../Context/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`/api/v1/auth/login`, { email, password });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommerce">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>
          <div className="mb-3">
            <input
              placeholder="Enter your email"
              type="email"
              className="form-control"
              id="exampleInputEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Enter your Password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
