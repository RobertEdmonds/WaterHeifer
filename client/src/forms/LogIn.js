import React, { useState } from "react";
import Box from "@mui/material/Box";
import "../styles/LogIn.css"

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
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
        <form className="logInForm">
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
        </form>
      </Box>
    </div>
  );
};

export default LogIn;
