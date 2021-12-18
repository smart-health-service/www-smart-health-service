import React from "react";
import { makeStyles } from "@material-ui/core";
import DocCard from "../common/doctors/DocCard";
import AppointMentSection from "../appointment/AppointMentSection";

const useStyles = makeStyles((theme) => ({
  docprofileRoot: {
    height: "calc(100vh - 100px)",
    background: "#FFFFFF",
    marginTop: 90,
    maxWidth: 1312,
    margin: "0 auto",
    boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
    borderRadius: 16,
    "&>div": {
      padding: "4px 16px 0 16px",

      "&:nth-child(1)": {
        minWidth: 1312,
        "&>div": {
          "&>div": {
            "&>a": {
              display: "none",
            },
          },
        },
      },
    },
  },
}));
const DocProfileMain = () => {
  const classes = useStyles();
  return (
    <div className={classes.docprofileRoot}>
      <DocCard />
      <AppointMentSection />
    </div>
  );
};

export default DocProfileMain;
