import React, { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const [userType, setUserType] = useState("farmer");
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    address: "",
    farmName: "",
    farmSize: "",
    fishType: "",
    productionCapacity: "",
    experience: "",
    investmentNeeded: "",
    investmentAmount: "",
    investorInterest: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${userType.toUpperCase()} Registration Data:`, formData);
    alert("Registration Successful!");
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        <h2 className="registration-title">
          {userType === "farmer" ? "Farmer" : "Investor"} Registration
        </h2>
        <div className="user-type-toggle">
          <button className={userType === "farmer" ? "active" : ""} onClick={() => setUserType("farmer")}>Farmer</button>
          <button className={userType === "investor" ? "active" : ""} onClick={() => setUserType("investor")}>Investor</button>
        </div>
        <form onSubmit={handleSubmit} className="registration-form">
          <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} required />
          <input name="contactNumber" type="text" placeholder="Contact Number" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} />
          <input name="address" type="text" placeholder="Address" onChange={handleChange} required />

          {userType === "farmer" ? (
            <>
              <input name="farmName" type="text" placeholder="Farm Name" onChange={handleChange} />
              <input name="farmSize" type="text" placeholder="Farm Size (in acres)" onChange={handleChange} />
              <input name="fishType" type="text" placeholder="Type of Fish Cultured" onChange={handleChange} />
              <input name="productionCapacity" type="text" placeholder="Annual Production Capacity (kg)" onChange={handleChange} />
              <input name="experience" type="text" placeholder="Years of Experience" onChange={handleChange} />
              <input name="investmentNeeded" type="text" placeholder="Investment Needed ($)" onChange={handleChange} />
            </>
          ) : (
            <>
              <input name="investmentAmount" type="text" placeholder="Investment Amount ($)" onChange={handleChange} />
              <input name="investorInterest" type="text" placeholder="Areas of Interest" onChange={handleChange} />
            </>
          )}

          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
