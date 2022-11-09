import React from "react";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { deleteUser } from "../features/users/userSlice.js";

import "../styles/navBarDiv.css";

function NavBar() {
  const users = useSelector((store) => store.users);
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogIn = () => {
    history.push("/login");
  };

  const handleLogOut = () => {
    dispatch(deleteUser());
  };
  return (
    <>
      <div className="navBarDiv">
        <NavLink
          to="/"
          exact
          className="navBarLinks"
          activeStyle={{ color: "black" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/schedule"
          className="navBarLinks"
          activeStyle={{ color: "black" }}
        >
          Schedule Trip
        </NavLink>
        <NavLink
          to="/create_trip"
          className="navBarLinks"
          activeStyle={{ color: "black" }}
        >
          Create Trip
        </NavLink>
        <NavLink
          to="/donate"
          className="navBarLinks"
          activeStyle={{ color: "black" }}
        >
          Donate
        </NavLink>
        <NavLink
          to="/add_company"
          className="navBarLinks"
          activeStyle={{ color: "black" }}
        >
          Add Company
        </NavLink>
        <NavLink
          to="/blog"
          className="navBarLinks"
          activeStyle={{ color: "black" }}
        >
          Blog
        </NavLink>
        {users.user.id > 0 && (
          <>
            <button
              className="avatarButton"
              aria-describedby={id}
              variant="contained"
              onClick={handleAvatarClick}
            >
              <Avatar src="/broken-image.jpg" />
            </button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Typography sx={{ p: 1 }}>{users.user.name}</Typography>
              <Button variant="text" onClick={handleLogOut}>Log Out</Button>
            </Popover>
          </>
        )}
        {users.user.id === undefined && (
          <div className="navBarLogIn">
            <button className="logInButton" onClick={handleLogIn}>
              Sign In
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
