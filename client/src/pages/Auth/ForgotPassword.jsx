import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";
import toast from "react-hot-toast";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce"}>
      <div className="form-container">
        <form onSubmit={handleReset}>
          <h4 className="title">RESET PASSWORD</h4>
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
              placeholder="Enter your Nick Name"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Enter your New Password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
