import React from "react";
import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import "../styles/navBarDiv.css";

function NavBar() {
  const users = useSelector((store) => store.users);
  const history = useHistory();
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
          to="/donate"
          className="navBarLinks"
          activeStyle={{ color: "black" }}
        >
          Donate
        </NavLink>
        <NavLink
          to="/blog"
          className="navBarLinks"
          activeStyle={{ color: "black" }}
        >
          Blog
        </NavLink>
        {users.user.length > 0 && (
          <>
            <button
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
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
          </>
        )}
        {users.user.length === 0 && (
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
