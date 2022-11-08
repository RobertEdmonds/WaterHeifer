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
  
      setLoading(false);
      if (users.user.id > 0) {
        history.push("/");
      } else if (users.errors) {
        setError(users.errors);
      }
  };


  return (
    <>
      <div className="logInDiv">
        <Box
          sx={{
            width: 300,
            height: 200,
            backgroundColor: "primary.dark",
            //   "&:hover": {
            //     backgroundColor: "primary.main",
            //     opacity: [0.9, 0.8, 0.7],
            //   },
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
      {error.map((err) => {
        return (
          <h3 className="errorStyle" key={err}>
            {err}
          </h3>
        );
      })}
    </>
  );
};

export default LogIn;
