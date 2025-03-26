import React, { useState } from 'react';
import './LoginForm.css';

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            username,
            password
        };

        console.log('Login data:', loginData);

        if (username === "admin" && password === "password") {
            alert("Login Successful!");
            setErrorMessage("");
        } else {
            setErrorMessage("Invalid username or password.");
        }
    };

    return (
        <div className="card">
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    name="username" 
                    required 
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                />

                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    required 
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />

                <button type="submit">Login</button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};
