import React from "react";
import { makeStyles } from "@material-ui/core";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import SpecialityMain from "../components/speciality/SpecialityMain";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "auto",
  },
}));
const DoctorsContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBarMain />
      <SpecialityMain />
    </div>
  );
};

export default DoctorsContainer;
