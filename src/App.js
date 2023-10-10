import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';
import ResetPasswordPage from './auth/ResetPasswordPage';
import LoginPage from './auth/LoginPage';
import PasswordResetSuccessPage from './auth/PasswordResetSuccessPage';
import ChangePasswordPage from './auth/ChangePasswordPage';
import OTPConfirmationPage from './auth/OtpConfirmation';

const App = () => {
  
  const isLoggedIn = false; 

  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="reset-password-success-page" element={<PasswordResetSuccessPage />} />
        <Route path="change-password" element={<ChangePasswordPage />} />
        <Route path="enter-otp" element={<OTPConfirmationPage />} />

       
        <Route
          path="/dashboard/*"
          element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />}
        />

      
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
