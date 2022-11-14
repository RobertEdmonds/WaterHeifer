import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logInUser } from "../features/users/userSlice.js";
import Box from "@mui/material/Box";
import "../styles/LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const history = useHistory();

  const logInForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = {
      email: email.toUpperCase(),
      password,
    };
    dispatch(logInUser(form));
    if (users.user.id > 0) {
      history.push("/");
      setLoading(false);
    } else if (users.errors) {
      setError(users.errors);
      setLoading(false);
    }
  };

  return (
    <>
      <ul>
        {error.map((err) => {
          return (
            <li className="errorStyle" key={err}>
              {err}
            </li>
          );
        })}
      </ul>
      <div className="logInDiv">
        <Box
          sx={{
            width: 300,
            height: 200,
            backgroundColor: "primary.dark",
          }}
        >
          <form className="logInForm" onSubmit={logInForm}>
            <label className="logInLabel">
              <span>*</span>Email
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
              />
            </label>
            <br />
            <label className="logInLabel">
              <span>*</span>Password
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit" className="signInButton">
              {loading ? "Loading..." : "Sign In"}
            </button>
            <h5 style={{ margin: "1px", color: "white" }}>or</h5>
            <Link to="/signup" style={{ color: "white", fontWeight: "bold" }}>
              Sign Up
            </Link>
          </form>
        </Box>
      </div>
    </>
  );
};

export default LogIn;
