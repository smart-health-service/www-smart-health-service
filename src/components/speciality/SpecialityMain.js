import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import SearchBox from "./SearchBox";
import { H2, H3, H4, H6 } from "../common/typography/Header";
import { Body1 } from "../common/typography/Typography";
import Speciality from "../common/doctors/Speciality";
import { Specialities } from "../common/Specialities";
import { useParams } from "react-router-dom";
import DocCard from "../common/doctors/DocCard";
const useStyles = makeStyles((theme) => ({
  SpecialityMain: {
    maxWidth: 1312,
    height: "calc(100vh - 149px)",
    margin: "auto",
    paddingTop: 100,

    "&>div": {
      boxShadow: "0px 2px 4px rgb(16 7 33 / 12%)",
      minHeight: "100vh",
      height: "fit-content",
      width: "100%",
      background: "#ffffff",
      borderRadius: 16,
      "&>div": {
        "&>h2": {
          textAlign: "center",
          margin: "10px 0",
        },
        "&>p": {
          textAlign: "center",
          width: "30%",
          margin: "10px auto",
          color: "#808080",
        },
      },
    },
  },
  docMainTop: {
    height: 200,
    width: "100%",
    borderRadius: "16px 16px 0 0",
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
  specialitiesMain: {
    padding: 16,
    "&>h4": {
      textAlign: "center",
      margin: "10px 0 ",
    },
    "&>div": {
      height: 620,
      overflowY: "auto",
    },
  },
}));
const SpecialityMain = () => {
  const classes = useStyles();
  const [searchText, setsearchText] = useState("");
  const [specialityArr, setspecialityArr] = useState([...Specialities]);

  useEffect(() => {
    if (searchText !== "") {
      let regex = new RegExp(searchText, "i");
      let filteredArr = Specialities.filter((elem) =>
        regex.test(elem.title.text)
      );
      setspecialityArr(filteredArr);
    } else {
      setspecialityArr([...Specialities]);
    }
  }, [searchText]);
  return (
    <div className={classes.SpecialityMain}>
      <div>
        <div className={classes.docMainTop}>
          <div></div>
        </div>
        <Grid container>
          <SearchBox setsearchText={setsearchText} searchText={searchText} />
        </Grid>
        <Grid className={classes.specialitiesMain}>
          {window.location.href.split("?").at(1) !== undefined ? (
            <>
              <H4 bold>Showing earliest available doctors</H4>
              <Grid container spacing={2}>
                {new Array(30).fill("").map((elem) => (
                  <DocCard />
                ))}
              </Grid>
            </>
          ) : (
            <>
              <H2 bold> Clinic and Specialities</H2>
              <Body1 bold>
                please select which specialist you would like to consult or
                search above..!
              </Body1>
              <Grid container spacing={2}>
                {specialityArr.map((elem) => (
                  <Speciality data={elem} />
                ))}
              </Grid>
            </>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default SpecialityMain;
