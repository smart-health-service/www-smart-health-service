import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@material-ui/core";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ReactComponent as Logo } from "../../assets/icons/SmartHealthLogo.svg";
import { H5, H6 } from "../common/typography/Header";
import NavTabs from "./NavTabs";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 1300,
    width: "100%",
    "&>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      boxShadow: "0 8px 16px 0 rgb(0 0 0 / 4%)",
      padding: "0 10px",
      "&>svg": {
        cursor: "pointer",
      },
    },
  },
  navMenu: {
    display: "flex",
    alignItems: "center",
    "&>button": {
      padding: 8,
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

const NavBarMain = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const token = localStorage.getItem("token");
  return (
    <div className={classes.root}>
      <Box>
        <Logo />
        <div className={classes.navMenu}>
          {!token ? (
            <Button onClick={handleMenu} color="inherit">
              <Avatar />
              <H6>Logim</H6>
            </Button>
          ) : (
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Register" />
              <Tab label="Login" />
              {/* <Tab label="Appointments" /> */}
            </Tabs>
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
      </Box>
    </div>
  );
};

export default NavBarMain;
