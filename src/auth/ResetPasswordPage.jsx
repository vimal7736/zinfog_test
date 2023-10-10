import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePhone } from "react-icons/ai";
import "./ResetPassword.css";
import LogoSvg from "../svg/LogoSvg";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "aswini@b2b.com") {
      // Navigate to the success page
      // navigate("/reset-password-success-page");
      navigate("/enter-otp");
    } else {
      alert("Invalid email. Please try again.");
    }
  };

  return (
    <div className="login-main">
      <div className="login-cotainer">
        <LogoSvg />
        <div className="login-layout">
          <h4>Reset Password</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="login-label">
              Email Id
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter email id"
              className="login-input"
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <Link to="/login" className="login-number">
          Back to Login
        </Link>
        <p className="login-number">
          <AiOutlinePhone /> 839y943
        </p>
        <p className="login-footer">I hereby </p>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
