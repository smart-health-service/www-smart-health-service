import React from "react";
import { Button, Link, makeStyles } from "@material-ui/core";
import { H2, H4 } from "../common/typography/Header";
import AppointMentSection from "./AppointMentSection";

const useStyles = makeStyles((theme) => ({
  appointmentRoot: {
    height: "calc(100vh - 100px)",
    background: "#FFFFFF",
    marginTop: 90,
    // maxWidth: 1312,
    margin: "0 auto",
    boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
    borderRadius: 16,
    "&>div": {
      padding: 16,
    },
  },
  appointmentMain: {
    height: "fit-content",
    margin: "0 auto",
    marginTop: 180,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>div": {
      width: "35%",
      height: 300,
      borderRadius: 16,
      "&>div": {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        "&>img": {
          height: 140,
          width: 140,
          margin: "0 auto",
          borderRadius: 16,
        },
        "&>H4": {
          margin: "20px 0",
          textAlign: "center",
        },
        "&>a": {
          textAlign: "center",
        },
      },
      "&:nth-child(1)": {
        marginRight: -50,
        boxShadow: "0px 8px 64px rgba(28, 6, 76, 0.08)",
      },
      "&:nth-child(2)": {
        borderRadius: "50%",
        height: 150,
        width: 150,
        background: "#f5f3f7",
        zIndex: 1,
        "&>h2": {
          textAlign: "center",
          marginTop: 55,
          color: "#808080",
        },
      },
      "&:nth-child(3)": {
        marginLeft: -50,
        boxShadow: "0px 8px 64px rgba(28, 6, 76, 0.08)",
        "&>div": {
          "&>div": {
            margin: "0 auto",
            background: "#9c27b0",
            borderRadius: 16,
            "&>img": {
              height: 100,
              width: 114,
              padding: 16,
            },
          },
        },
      },
    },
  },
}));
const AppointmentMain = () => {
  const classes = useStyles();
  return (
    <div className={classes.appointmentRoot}>
      <div>
        <div className={classes.appointmentMain}>
          <div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/appointment.png`}
                alt="appointment"
              />
              <H4 bold>Make An Appointment</H4>
              <Link href="/doc-specialits" underline="none">
                <Button variant="contained" color="primary">
                  Book a Time
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <H2 bold>OR</H2>
          </div>
          <div>
            <div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/s4.png`}
                  alt="appointment"
                />
              </div>

              <H4 bold>Request For Medical Checkup</H4>
              <Link href="/test-specialits" underline="none">
                <Button variant="contained" color="secondary">
                  Book a Time
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentMain;
