import React from "react";

import { Grid, makeStyles } from "@material-ui/core";
import { H1, H5 } from "../common/typography/Header";
import AppointmentCard from "./AppointmentCard";
import { connect } from "react-redux";
import FeatureRows from "./FeatureRows";
import DocCard from "../common/doctors/DocCard";
import { Link } from "react-router-dom";
import { Specialities } from "../common/Specialities";
import Speciality from "../common/doctors/Speciality";

const useStyles = makeStyles((theme) => ({
  dashboardRoot: {
    maxWidth: 1312,
    height: "calc(100vh - 149px)",
    margin: "auto",
    paddingTop: 100,
    "&>div": {
      boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
      //   minHeight: "100vh",
      height: "fit-content",
      width: "100%",
      background: "#ffffff",
      borderRadius: 16,
    },
  },
  dashboardTop: {
    height: 400,
    width: "100%",
    borderRadius: "16px 16px 0 0 ",
    background: `url(${process.env.PUBLIC_URL}/images/dashboard-bg.png)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    "&>div": {
      padding: 16,
      "&>h1": {
        color: "#ffffff",
      },
    },
  },
  dashboardMain: {
    padding: 16,
    height: "fit-content",
    "&>div": {
      "&>h5": {
        margin: "20px 0",
      },
      "&>a": {
        textDecoration: "none",
        color: "#9c27b0",
      },
    },
  },
  doctorListHeader: {
    marginTop: 60,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const DashboardMain = ({ user }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.dashboardRoot}>
      <div>
        <div className={classes.dashboardTop}>
          <div>
            <H1 bold>Welcome {user?.name}..!</H1>
          </div>
        </div>
        <Grid container className={classes.dashboardMain}>
          <AppointmentCard />
          <FeatureRows />
          <div className={classes.doctorListHeader}>
            <H5 bold>Our Specialities</H5>
            <Link to="/doc-specialits">view more {">"}</Link>
          </div>
          <Grid container spacing={2}>
            <Grid container spacing={2}>
              {Specialities.slice(0, 6).map((elem) => (
                <Speciality data={elem} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => ({
  user: state.user.userData,
  userDataLoading: state.user.userDataLoading,
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(DashboardMain);
