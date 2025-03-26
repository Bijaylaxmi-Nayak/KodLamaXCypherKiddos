import React, { useState } from "react";
import "./App.css";
import Registration from "./Components/Registration"; // Use default import syntax
import { LoginForm } from "./Components/Loginform";
      // Use default import syntax

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Toggle between Login and Registration forms
  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="app-container">
      {isLogin ? (
        <div className="form-container">
          <LoginForm />
          <p className="toggle-text">
            Don't have an account?{" "}
            <button className="toggle-button" onClick={toggleForm}>
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <div className="form-container">
          <Registration />
          <p className="toggle-text">
            Already have an account?{" "}
            <button className="toggle-button" onClick={toggleForm}>
              Log In
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
