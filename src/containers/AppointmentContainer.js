import React from "react";
import { connect } from "react-redux";
import AppointmentMain from "../components/appointment/AppointmentMain";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import { START_GET_APPOINTMENTS } from "../constants/appointmentConstant";

export const AppointmentContainer = ({
  getAppointments,
  user,
  appointmentList,
}) => {
  return (
    <div>
      <NavBarMain />
      <AppointmentMain
        getAppointments={getAppointments}
        user={user}
        appointmentList={appointmentList}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.userData,
  appointmentList: state.appointment.appointmentList,
});
const mapDispatchToProps = (dispatch) => ({
  getAppointments: (creator, assignee) =>
    dispatch({ type: START_GET_APPOINTMENTS, creator, assignee }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentContainer);
