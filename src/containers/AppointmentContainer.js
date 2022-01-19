import React, { Component } from "react";
import { connect } from "react-redux";
import AppointmentMain from "../components/appointment/AppointmentMain";
import ChatBot from "../components/chatbot/ChantBotmain";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import { START_CREATE_APPOINTMENT } from "../constants/appintmentConstants";

export const AppointmentContainer = (createAppointment) => {
  return (
    <div>
      <NavBarMain />
      <AppointmentMain createAppointment={createAppointment} />
    </div>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentContainer);
