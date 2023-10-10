import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Login.css";
import LogoSvg from "../svg/LogoSvg";
import { login } from "../service/api";
import { AiOutlinePhone } from "react-icons/ai";

const LoginPage = () => {
  const [username, setUsername] = useState(""); // Using the provided username
  const [password, setPassword] = useState(""); // Using the provided password
  const [error, setError] = useState(null);

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     // const credentials = {
  //     //   client_id: "ei0gvH1bk8wNVj0xqKgtGVzxa3yWXa",
  //     //   client_secret: "Yjq2KXplGi6Niarcp1gn6PP7OrMDlP",
  //     //   user_name: username,
  //     //   password: password,
  //     //   grant_type: "client_credentials",
  //     // };
  
  //     // const response = await login(credentials);
  //     // console.log("Login successful. Response:", response);
  
  //     if (username ==="vimal") {
  //       window.location.href = "/";
  //     } else {
  //       setError("Invalid username or password. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //     setError("Invalid username or password. Please try again.");
  //   }
  // };
  
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      if (username === "aswini@b2b.com"&& password === "123" ) {
        window.location.href = "/";
      } else {
        setError("Wrong credential your email id and password entered is wrong");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid username or password. Please try again.");
    }
  };
  
  

  return (
    <div className="login-main">
      <div className="login-cotainer">
        <LogoSvg />
        <h3>Report Download portal</h3>
        <div className="login-layout">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="username" className="login-label">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter email id"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/">
              {" "}
                <button
                   onClick={handleLogin}
                  type="submit"
                >
                  Submit
                </button>
            </Link>
            <Link to="/reset-password">
              {" "}
                <p
                >
                  Reset Password
                </p>
            </Link>

          </form>
        </div>
        <div style={{color:"red"}}>

          {error && <p className="error-message">{error}</p>}
        </div>
        <p className="login-number">
          <AiOutlinePhone /> 1234567890
        </p>
        <p className="login-footer">I hereby </p>
      </div>
    </div>
  );
};

export default LoginPage;
