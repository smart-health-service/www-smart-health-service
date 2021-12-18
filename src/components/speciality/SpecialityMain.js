import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import SearchBox from "./SearchBox";
import { H2, H3, H4, H6 } from "../common/typography/Header";
import { Body1 } from "../common/typography/Typography";
import Speciality from "../common/doctors/Speciality";
import { Specialities, TestSpecialities } from "../common/Specialities";
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
      // minHeight: "100vh",
      height: "fit-content",
      width: "100%",
      background: "#ffffff",
      borderRadius: 16,
      "&>div": {
        "&>h2": {
          textAlign: "center",
          margin: "40px 0 10px 0",
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
    height: 100,
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
      height: 390,
      overflowY: "auto",
    },
  },
}));
const SpecialityMain = () => {
  const classes = useStyles();
  const [searchText, setsearchText] = useState("");
  const [specialityArr, setspecialityArr] = useState([...Specialities]);
  const [testSpecialityArr, setTestSpecialityArr] = useState([...Specialities]);

  useEffect(() => {
    if (
      searchText !== "" &&
      window.location.href.split("/").at(-1) === "doc-specialits"
    ) {
      let regex = new RegExp(searchText, "i");
      let filteredArr = Specialities.filter((elem) =>
        regex.test(elem.title.text)
      );
      setspecialityArr(filteredArr);
    } else {
      setspecialityArr([...Specialities]);
    }
    if (
      searchText !== "" &&
      window.location.href.split("/").at(-1) === "test-specialits"
    ) {
      let regex = new RegExp(searchText, "i");
      let filteredArr = TestSpecialities.filter((elem) =>
        regex.test(elem.title.text)
      );
      setTestSpecialityArr(filteredArr);
    } else {
      setTestSpecialityArr([...TestSpecialities]);
    }
  }, [searchText]);
  return (
    <div className={classes.SpecialityMain}>
      <div>
        <Grid container className={classes.docMainTop}>
          <SearchBox setsearchText={setsearchText} searchText={searchText} />
        </Grid>

        <Grid className={classes.specialitiesMain}>
          {window.location.href.split("/").at(-1) === "doc-specialits" ? (
            <>
              <H2 bold> Clinic Specialities</H2>
              <Body1 bold>
                please select which specialist you would like to consult or
                search above..!
              </Body1>
              <Grid container spacing={2}>
                {specialityArr.map((elem) => (
                  <Speciality data={elem} currenttab={"doc-specialits"} />
                ))}
              </Grid>
            </>
          ) : window.location.href.split("/").at(-1) === "test-specialits" ? (
            <>
              <H2 bold> Test Specialities</H2>
              <Body1 bold>
                please select which type of Medical Test you would like to
                request..!
              </Body1>
              <Grid container spacing={2}>
                {testSpecialityArr.map((elem) => (
                  <Speciality data={elem} currenttab={"test-specialits"} />
                ))}
              </Grid>
            </>
          ) : (
            <>
              <H2 bold>Showing earliest available doctors</H2>
              <Grid container spacing={2}>
                {new Array(30).fill("").map((elem) => (
                  <DocCard />
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
