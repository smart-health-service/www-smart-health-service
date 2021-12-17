import React from "react";
import { Grid, Link, makeStyles } from "@material-ui/core";
import { H5, H6 } from "../typography/Header";
import { Body1 } from "../typography/Typography";

const useStyles = makeStyles((theme) => ({
  docCardRoot: {
    background: "#FFFFFF",
    "&>a": {
      textDecoration: "none",
      "&>div": {
        cursor: "pointer",
        height: "fit-content",
        boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
        padding: 8,
        borderRadius: 16,

        "&>img": {
          height: "88%",
          width: "100%",
          maxHeight: 184,
          borderRadius: "16px 16px 0 0",
        },
        "&>h6": {
          padding: "8px 0",
          textAlign: "center",
        },
      },
    },
  },
}));
const Speciality = ({ data }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={4} md={2} className={classes.docCardRoot}>
      <Link
        href={`/specialits?type=${data?.title?.text.replaceAll(" ", "")}`}
        underline="none"
      >
        <div>
          <img src={data?.image?.url} alt="appointment" />
          <H6 bold>{data?.title?.text}</H6>
        </div>
      </Link>
    </Grid>
  );
};

export default Speciality;
