import React from "react";
import { makeStyles } from "@material-ui/core";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { H6 } from "../common/typography/Header";
import NavTabs from "./NavTabs";

const useStyles = makeStyles((theme) => ({
  navMenu: {
    display: "flex",
    alignItems: "center",
    "&>button": {
      padding: 8,
      margin: 8,
      TextAlign: "center",
      background: "#F5f5f5",
      borderRadius: 10,
      height: 35,
      "&>div": {
        height: 25,
        width: 25,
        marginRight: 5,
      },
    },
  },
}));
const NavMenu = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const token = localStorage.getItem("token");
  return (
    <div className={classes.navMenu}>
      {token ? (
        <Button onClick={handleMenu} color="inherit">
          <Avatar />
          <H6>Login</H6>
        </Button>
      ) : (
        <NavTabs tabs={["Register", "Login"]} />
      )}

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </div>
  );
};

export default NavMenu;
