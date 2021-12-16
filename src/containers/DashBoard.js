import React from "react";
import DashboardMain from "../components/Dashboard/DashboardMain";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "auto",
  },
}));
const DashBoard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBarMain />
      <DashboardMain />
    </div>
  );
};

export default DashBoard;
