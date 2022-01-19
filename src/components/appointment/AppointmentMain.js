import React, { useEffect } from "react";
import { Button, Link, makeStyles } from "@material-ui/core";
import { H2, H4 } from "../common/typography/Header";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  appointmentRoot: {
    height: "calc(100vh - 100px)",
    background: "#FFFFFF",
    marginTop: 90,
    maxWidth: 1312,
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
  listRoot: {
    "&>ul": {
      maxWidth: "100%",
    },
  },
}));
const AppointmentMain = ({ getAppointments, user, appointmentList }) => {
  console.log(appointmentList, "ppppppppp");
  useEffect(() => {
    getAppointments(user?._id);
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#ff9f00",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
  ];

  const classes = useStyles();
  const { type } = useParams();

  return (
    <div className={classes.appointmentRoot}>
      <div>
        {type === "create" && (
          <div className={classes.appointmentMain}>
            <div>
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/appointment.png`}
                  alt="appointment"
                />
                <H4 bold>Make An Appointment</H4>
                <Link href="/doc-specialits/doc" underline="none">
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
                <Link href="/test-specialits/test" underline="none">
                  <Button variant="contained" color="secondary">
                    Book a Time
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
        {type === "view" && (
          <div className={classes.listRoot}>
            <H4 bold>Appointments</H4>
            <TableContainer sx={{ maxHeight: "84vh" }} component={Paper}>
              <Table
                stickyHeader
                sx={{ minWidth: 700 }}
                aria-label="customized table"
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Spealist</StyledTableCell>

                    <StyledTableCell align="right">date&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">time&nbsp;</StyledTableCell>
                    <StyledTableCell align="right">Status</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointmentList?.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row?.notifier}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {/* {row.status} */}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row?.date}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row?.time}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row?.status}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentMain);
