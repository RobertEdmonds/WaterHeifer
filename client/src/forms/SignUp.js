import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import "../styles/SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([])
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    setError([]);
    setLoading(true);
    const dataForm = {
      email: email.toUpperCase(),
      name: name.toUpperCase(),
      phone_number: parseInt(phone),
      password,
      password_confirmation: confirmation,
    };
  };

  return (
    <div className="signUpDiv">
      <Box
        sx={{
          width: 300,
          height: 320,
          backgroundColor: "primary.dark",
          //   "&:hover": {
          //     backgroundColor: "primary.main",
          //     opacity: [0.9, 0.8, 0.7],
          //   },
        }}
      >
        <form className="signUpStyle" onSubmit={handleSubmit}>
          <label className="labelStyle">
          <span>* </span>Email Address
            <br />
            <input
              className="inputStyle"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
            />
          </label>
          <br />
          <label className="labelStyle">
          <span>* </span>Full Name
            <br />
            <input
              className="inputStyle"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label className="labelStyle">
          <span>* </span>Phone Number
            <br />
            <input
              className="inputStyle"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.trim())}
            />
          </label>
          <br />
          <label className="labelStyle">
          <span>* </span>Password
            <br />
            <input
              className="inputStyle"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label className="labelStyle">
          <span>* </span>Password Confirmation
            <br />
            <input
              className="inputStyle"
              type="password"
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" className="signUpButton">
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <h5 style={{ margin: ".7rem", color: "white" }}>or</h5>
            <Link to="/login" style={{ color: "white" , fontWeight: "bold"}}>
              Sign In
            </Link>
        </form>
      </Box>
    </div>
  );
};

export default SignUp;
