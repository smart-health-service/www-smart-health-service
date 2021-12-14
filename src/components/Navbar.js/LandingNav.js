import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@material-ui/core";
import { ReactComponent as Logo } from "../../assets/icons/SmartHealthLogo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 48,
    position: "fixed",
    background: "#FFFFFF",
    zIndex: 1000,
    boxShadow:
      "0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 12px -5px rgb(156 39 176 / 46%)",
    "&>div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 10px",
      "&>svg": {
        cursor: "pointer",
      },
    },
  },
  navMenu: {
    display: "flex",
    alignItems: "center",
    "&>button": {
      padding: 8,
      TextAlign: "center",
      background: "#F5f5f5",
      borderRadius: 10,
      height: 35,
      "&>div": {
        height: 25,
        width: 25,
        marginRight: 5,
      },
    },
  },
}));
var tabs = [
  { name: "Home", value: "#home" },
  { name: "About Us", value: "#about" },
  { name: "Services", value: "#services" },
  { name: "Doctors", value: "#doctors" },
  { name: "Contact Us ", value: "#contact" },
  { name: "Register ", value: "register" },
];
const LandingNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (value === 0 && window.location.href.split("/").at(-1) !== "home") {
      window.location.href = "#home";
    }
  }, []);
  return (
    <div className={classes.root}>
      <Box>
        <Logo />
        <Tabs value={value} onChange={handleChange} centered>
          {tabs.map((elem) => (
            <Tab label={elem.name} href={elem.value} />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

export default LandingNav;
