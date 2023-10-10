import React from "react";
import "../auth/Login.css";
import { Link } from "react-router-dom";
import { AiOutlinePhone } from "react-icons/ai";
import LogoSvg from "../svg/LogoSvg";

const PasswordResetSuccessPage = () => {
  return (
    <div className="login-main">
      <div className="login-cotainer">
        <LogoSvg />
        <div className="successReset" >
            <small> <bold> Password Reset Successfully</bold> </small>
            <br />
            <small>password reset link has been sent to your registered email address</small>
        </div>
        <Link to="/login" className="login-number">
          Login Now
        </Link>
        <p className="login-number">
          <AiOutlinePhone /> 123456789
        </p>
      </div>
    </div>
  );
};

export default PasswordResetSuccessPage;
