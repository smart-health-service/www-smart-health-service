import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@material-ui/core";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ReactComponent as Logo } from "../../assets/icons/SmartHealthLogo.svg";

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
}));

const NavBarMain = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Box>
        <Logo />
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Dashboard" />
          <Tab label="Calender" />
          <Tab label="Appointments" />
        </Tabs>
        <div>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
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
