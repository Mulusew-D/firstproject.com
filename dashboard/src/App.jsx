import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import AddNewAdmin from "./components/AddNewAdmin";
import Messages from "./components/Messages";
import Doctors from "./components/Doctors";
import Sidebar from "./components/Sidebar";
import { Context } from "./main";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setAdmin } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/admin/me`);
        setIsAuthenticated(true);
        setAdmin(response.data.user);
      } catch (err) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    fetchAdmin();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/doctor/addnew" element={isAuthenticated ? <AddNewDoctor /> : <Navigate to="/login" />} />
        <Route path="/admin/addnew" element={isAuthenticated ? <AddNewAdmin /> : <Navigate to="/login" />} />
        <Route path="/messages" element={isAuthenticated ? <Messages /> : <Navigate to="/login" />} />
        <Route path="/doctors" element={isAuthenticated ? <Doctors /> : <Navigate to="/login" />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
