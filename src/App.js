import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';
import ResetPasswordPage from './auth/ResetPasswordPage';
import LoginPage from './auth/LoginPage';
import PasswordResetSuccessPage from './auth/PasswordResetSuccessPage';
import ChangePasswordPage from './auth/ChangePasswordPage';
import OTPConfirmationPage from './auth/OtpConfirmation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginPage/>} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="reset-password-success-page" element={<PasswordResetSuccessPage />} />
        <Route path="change-password" element={<ChangePasswordPage />} />
        <Route path="enter-otp" element={<OTPConfirmationPage/>} />

        <Route
          path="/"
          element={
              <Routes>
                <Route index element={<DashboardPage />} />
              </Routes>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
