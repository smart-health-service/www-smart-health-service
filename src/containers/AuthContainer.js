import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import LoginForm from "../components/authComponents/LoginForm";

const useStyles = makeStyles((theme) => ({
  authRoot: {
    height: "100vh",
    overflow: "hidden",
    "&>div": {
      paddingTop: 50,
      background: `url(${process.env.PUBLIC_URL}/images/auth-bg.png)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      height: "100vh",
      // height: "95vh",
    },
  },
}));
const AuthContainer = () => {
  const classes = useStyles();
  return (
    <>
      <NavBarMain tabs={["Register", "Login"]} />
      <div className={classes.authRoot}>
        <Grid container>
          <Grid item md={8}></Grid>
          <LoginForm />
        </Grid>
      </div>
    </>
  );
};

export default AuthContainer;
