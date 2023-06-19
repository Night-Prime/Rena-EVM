import React from "react";
import "./login.css";
import finger from "../../assets/fingerprint.png";
import { useNavigate } from "react-router";
import { useState } from "react";
import Navbar from "../../layouts/navbar/Navbar";
import Footer from "../../layouts/footer/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let data = {
      username,
      password,
    };
    localStorage.setItem("user", JSON.stringify(data));
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/dashboard");
  };
  return (
    <div>
      <Navbar />
      <div className="login">
        <div className="login-container">
          <header>
            <h3>Seamless Stock Inventory and Management System</h3>
            <div className="line"></div>
          </header>
          <form className="login-form">
            <label htmlFor="username">
              <p>Username</p>
              <input
                type="text"
                placeholder="Rena"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              <p>Password</p>
              <input
                type="password"
                placeholder="*****************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button onClick={handleClick}>Login</button>
          </form>
          <img src={finger} alt={finger} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
