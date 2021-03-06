import React from "react";
import { Button, Grid, Link, makeStyles } from "@material-ui/core";
import { H5, H6 } from "../common/typography/Header";

const useStyles = makeStyles((theme) => ({
  dashboardAppointmentCard: {
    height: 300,
    borderRadius: 16,
    // width: "40%",
    marginTop: -140,
    background: "#FFFFFF",
    margin: "0 auto",
    boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
    "&>div": {
      padding: 16,
      textAlign: "center",
      "&>h6": {
        color: "#808080",
        margin: "10px",
      },
      "&>a": {
        "&>button": {
          width: "48%",
        },
      },
    },
  },
}));
const AppointmentCard = () => {
  const classes = useStyles();
  return (
    <Grid item sm={12} md={4} className={classes.dashboardAppointmentCard}>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/appointment.png`}
          alt="appointment"
        />
        <H5 bold>Book an Appointment</H5>
        <H6>
          please indicate weather you would like to book a time or specific
          doctor
        </H6>
        <Link href="/appointment/create" underline="none">
          <Button variant="contained" color="primary">
            Book a Time
          </Button>{" "}
        </Link>
        <Link href="/appointment/view" underline="none">
          <Button variant="contained" color="secondary">
            view appointments
          </Button>{" "}
        </Link>
      </div>
    </Grid>
  );
};

export default AppointmentCard;
