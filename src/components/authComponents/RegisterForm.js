import React from "react";
import { Button, Grid, Link, makeStyles } from "@material-ui/core";
import CommonTextField from "../common/textfields/CommonTextField";
import { H5 } from "../common/typography/Header";
import { Body1 } from "../common/typography/Typography";

const useStyles = makeStyles((theme) => ({
  loginRoot: {
    // width: 200,
    maxWidth: 340,
    margin: "auto",
    height: "fit-content",
    borderRadius: 10,
    background: "#f5f5f5",
    marginTop: 80,
    boxShadow:
      "0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 12px -5px rgb(156 39 176 / 46%)",
    "&>div": {
      padding: "40px 20px",
      "&>div": {
        margin: "8px 0",
      },
      "&>h5": {
        textAlign: "center",
      },
      "&>p": {
        textAlign: "center",
        margin: "8px 0",
      },
      "&>button": {
        width: "100%",
      },
    },
  },
}));
const RegisterForm = () => {
  const classes = useStyles();
  return (
    <Grid item xs={10} md={4} className={classes.loginRoot}>
      <div>
        <H5 bold>Register</H5>
        <CommonTextField variant="outlined" label="name" />
        <CommonTextField variant="outlined" label="email" />
        <CommonTextField variant="outlined" label="password" type="password" />
        <CommonTextField
          variant="outlined"
          label="confirm password"
          type="password"
        />
        <Button color="primary">Get started</Button>
        <Body1 medium>
          Already Member?{" "}
          <Link href="/login" underline="none">
            Login
          </Link>
        </Body1>
      </div>
    </Grid>
  );
};

export default RegisterForm;
