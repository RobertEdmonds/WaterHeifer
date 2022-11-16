import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { addUser } from "../features/users/userSlice.js";
import "../styles/SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const history = useHistory();

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
    dispatch(addUser(dataForm));
  };

  useEffect(() => {
    if (users.user) {
      history.push("/");
      setLoading(false);
    } else if (users.errors) {
      setError(users.errors);
      setLoading(false);
    }
  }, [users.user, users.errors, history]);

  return (
    <>
      <div className="signUpDiv">
        {error.map((err) => {
          return (
            <h4 className="errorSignUp" key={err}>
              {err}
            </h4>
          );
        })}
        <Box
          sx={{
            width: 300,
            height: 320,
            backgroundColor: "primary.dark",
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
            <Link to="/login" style={{ color: "white", fontWeight: "bold" }}>
              Sign In
            </Link>
          </form>
        </Box>
      </div>
    </>
  );
};

export default SignUp;
