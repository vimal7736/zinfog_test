import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePhone } from "react-icons/ai";
import "./OTPConfirmation.css";
import LogoSvg from "../svg/LogoSvg";

const OTPConfirmationPage = () => {
  const [otp, setOtp] = useState(""); // State to hold the OTP
  const navigate = useNavigate();

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the entered OTP
    if (otp === "1010") {
      // Navigate to success page
      navigate("/reset-password-success-page");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="otp-confirmation-main">
      <div className="otp-confirmation-container">
        <LogoSvg />
        <div className="otp-confirmation-layout">
          <h4>OTP Verification</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="otp" className="otp-confirmation-label">
              Enter OTP
            </label>
            <input
              type="text"
              id="otp"
              placeholder="1010"  // Set placeholder to 1010
              className="otp-confirmation-input"
              value={otp}
              onChange={handleOtpChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <Link to="/login" className="otp-confirmation-back-link">
          Back to Login
        </Link>
        <p className="otp-confirmation-info">
          <AiOutlinePhone /> 839y943
        </p>
        <p className="otp-confirmation-footer">I hereby </p>
      </div>
    </div>
  );
};

export default OTPConfirmationPage;
