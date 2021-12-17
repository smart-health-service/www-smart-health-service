import { Button, Grid } from "@material-ui/core";
import React from "react";

import { makeStyles } from "@material-ui/core";
import CommonTextField from "../common/textfields/CommonTextField";
import SearchIcon from "@mui/icons-material/Search";
const useStyles = makeStyles((theme) => ({
  serchboxRoot: {
    background: "#FFFFFF",
    height: "fir-content",
    margin: "0 auto",
    marginTop: -70,
    borderRadius: 10,
    boxShadow:
      "0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 12px -5px rgb(156 39 176 / 46%)",
    "&>div": {
      padding: "40px 16px",
      "&>div": {
        display: "flex",
        justifyContent: "space-between",
        "&>div": {
          width: "80%",
        },
      },
    },
  },
}));

const SearchBox = ({ setsearchText, searchText }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={10} md={6} className={classes.serchboxRoot}>
      <div>
        <div>
          <CommonTextField
            startIcon={<SearchIcon />}
            searchText={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </div>
      </div>
    </Grid>
  );
};

export default SearchBox;
