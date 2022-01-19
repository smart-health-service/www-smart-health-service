import React from "react";
import { makeStyles } from "@material-ui/core";
import DocCard from "../common/doctors/DocCard";
import AppointMentSection from "../appointment/AppointMentSection";
import { useEffect } from "react";
import { connect } from "react-redux";
import { START_GET_USER_DETAILS } from "../../constants/UserConstants";
import { useParams } from "react-router-dom";

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
const DocProfileMain = ({ getUserDetails, docData }) => {
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    getUserDetails(id);
  }, []);

  return (
    <div className={classes.docprofileRoot}>
      <DocCard doc={docData} />
      <AppointMentSection />
    </div>
  );
};

const mapStateToProps = (state) => ({
  docData: state.doc.docData,
});
const mapDispatchToProps = (dispatch) => ({
  getUserDetails: (_id) => dispatch({ type: START_GET_USER_DETAILS, _id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocProfileMain);
