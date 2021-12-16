import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  docCardRoot: {
    background: "#FFFFFF",
    "&>div": {
      height: 200,
      boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
      padding: 8,
      "&>img": {
        height: "100%",
        width: "100%",
      },
    },
  },
}));
const DocCard = () => {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={4} md={2} className={classes.docCardRoot}>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/d1.jpg`}
          alt="appointment"
        />
      </div>
    </Grid>
  );
};

export default DocCard;
