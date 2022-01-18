import React, { Component } from "react";
import { connect } from "react-redux";
import AppointmentMain from "../components/appointment/AppointmentMain";
import ChatBot from "../components/chatbot/ChantBotmain";
import NavBarMain from "../components/Navbar.js/NavBarMain";

export class AppointmentContainer extends Component {
  render() {
    return (
      <div>
        <NavBarMain />
        <AppointmentMain />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentContainer);
