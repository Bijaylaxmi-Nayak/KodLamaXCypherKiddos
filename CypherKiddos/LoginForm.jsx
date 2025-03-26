import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5602/login", {
        username,
        password,
      });

      alert(response.data.message);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="card">
      <h1>Login Form</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};
