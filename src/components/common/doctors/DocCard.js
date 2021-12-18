import React from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import { H5, H6 } from "../typography/Header";
import { Body1, Body2, Subtitle1 } from "../typography/Typography";
import TextsmsIcon from "@mui/icons-material/Textsms";
import { Link } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  docCardRoot: {
    background: "#FFFFFF",
    "&>div": {
      height: "fit-content",
      boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
      padding: 8,
      borderRadius: 16,
      "&>div>img": {
        height: 140,
        width: 120,
        borderRadius: 16,
      },
    },
  },
  docCardTop: {
    display: "flex",
  },
  docCardbuttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
    "&>button": {
      width: "48%",
    },
  },
  docData: {
    padding: 8,
    textTransform: "capitalize",
    "&>h6": {
      color: "#808080",
      margin: "4px 0",
    },
    "&>p": {
      margin: "2px 0",
      display: "flex",
      alignItems: "center",
      "&>svg": {
        height: 15,
        width: 15,
        color: "#808080",
        marginRight: 5,
      },
    },
  },
}));
const DocCard = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4} md={3} className={classes.docCardRoot}>
      <div>
        <div className={classes.docCardTop}>
          <img
            src={`${process.env.PUBLIC_URL}/images/d1.jpg`}
            alt="appointment"
          />
          <div className={classes.docData}>
            <H5>name</H5>
            <Subtitle1>BPT,MPT</Subtitle1>
            <Body1>Psychod Therapist</Body1>
            <Body1>
              <TextsmsIcon />
              English Hindi
            </Body1>
            <Body1>Ratings</Body1>
          </div>
        </div>
        <div className={classes.docCardbuttonGroup}>
          <Button color="primary" variant="outlined">
            Know More
          </Button>
          <Link href="/appointment?id=book-appointment" underline="none">
            <Button color="secondary" variant="contained">
              Consult Now
            </Button>
          </Link>
        </div>
      </div>
    </Grid>
  );
};

export default DocCard;
