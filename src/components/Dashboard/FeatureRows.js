import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { H5 } from "../common/typography/Header";

const useStyles = makeStyles((theme) => ({
  featuresRoot: {
    height: 250,
    marginTop: 60,
    justifyContent: "center",
  },
  cardMain: {
    boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
    height: "100%",
    width: "100%",
    borderRadius: 16,
    cursor: "pointer",
    background: "#ffffff",
    "&>div": {
      padding: 8,
      textAlign: "center",
      "&>div": {
        background: "#9c27b0",
        padding: 20,
        borderRadius: "16px 16px 0 0",
        "&>img": {
          height: 150,
        },
      },
    },
  },
}));
const FeatureRows = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.featuresRoot}>
      <Grid item xs={3}>
        <div className={classes.cardMain}>
          <div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/s1.png`}
                alt="appointment"
              />
            </div>
            <H5 bold>Clinic Visit</H5>
          </div>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.cardMain}>
          <div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/s2.png`}
                alt="appointment"
              />
            </div>
            <H5 bold>Chat Assitant</H5>
          </div>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.cardMain}>
          <div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/s4.png`}
                alt="appointment"
              />
            </div>
            <H5 bold>E-Medical</H5>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default FeatureRows;
