import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // LOGIN API
      const res = await axios.post(
        "https://mediserve-backend.onrender.com/api/v1/user/login",
        { email, password, role: "Admin" },
        { withCredentials: true }
      );

      toast.success(res.data.message);

      // FETCH AUTH USER
      const userRes = await axios.get(
        "https://mediserve-backend.onrender.com/api/v1/user/admin/me",
        { withCredentials: true }
      );

      setUser(userRes.data.user);
      setIsAuthenticated(true);

      navigateTo("/"); // redirect to dashboard

    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <section className="container form-component">
      <img src="/logo.png" alt="logo" className="logo" />
      <h1 className="form-title">WELCOME TO MediServe</h1>
      <p>Only Admins Are Allowed To Access These Resources!</p>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
