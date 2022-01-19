import React from "react";
import { makeStyles } from "@material-ui/core";
import NavBarMain from "../components/Navbar.js/NavBarMain";
import SpecialityMain from "../components/speciality/SpecialityMain";
import { connect } from "react-redux";
import { START_GET_DOC_LIST } from "../constants/UserConstants";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "auto",
  },
}));
const SpecialityContainer = ({ getDocList, docList }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBarMain />
      <SpecialityMain getDocList={getDocList} docList={docList} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  docList: state.doc.docList,
});
const mapDispatchToProps = (dispatch) => ({
  getDocList: (docType) => dispatch({ type: START_GET_DOC_LIST, docType }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialityContainer);
