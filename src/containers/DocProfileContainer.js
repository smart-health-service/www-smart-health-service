import React from "react";
import { makeStyles } from "@material-ui/core";
import DocProfileMain from "../components/docProfile/DocProfileMain";
import NavBarMain from "../components/Navbar.js/NavBarMain";

const useStyles = makeStyles((theme) => ({}));
const DocProfileContainer = () => {
  return (
    <div>
      <NavBarMain />
      <DocProfileMain />
    </div>
  );
};

export default DocProfileContainer;
