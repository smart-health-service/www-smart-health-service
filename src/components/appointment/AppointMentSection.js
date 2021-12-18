import { Button, Card, Grid } from "@material-ui/core";
import dayjs from "dayjs";
import React, { Component, useEffect, useState } from "react";
import { H5, H6 } from "../common/typography/Header";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  AppointmentRoot: {
    height: 430,
    overflow: "auto",
  },
  cardGroup: {
    overflowY: "auto",
    display: "flex",
    width: "98%",
    overflow: "auto",
    "&>div": {
      minWidth: 100,
      cursor: "pointer",
      "&>div": {
        "&>h6": {
          margin: "10px 0",
          textAlign: "center",
        },
      },
    },
  },
}));

const timeSlots = [
  {
    key: "100",
    minFromMidnight: 710,
    isSelected: false,
  },
  {
    key: "700",
    minFromMidnight: 700,
    isSelected: false,
  },
  {
    key: "800",
    minFromMidnight: 800,
    isSelected: false,
  },
  {
    key: "900",
    minFromMidnight: 900,
    isSelected: false,
  },
  {
    key: "1000",
    minFromMidnight: 1000,
    isSelected: false,
  },
];

const availableTypes = [
  {
    clinicId: "1",
    type: "In-Clinic",
    iconUrl: "https://icongr.am/feather/map-pin.svg?size=16",
    isSelected: false,
  },
  {
    clinicId: "2",
    type: "Voice Call",
    iconUrl: "https://icongr.am/feather/phone.svg?size=16",
    isSelected: false,
  },
  {
    clinicId: "3",
    type: "Video Call",
    iconUrl: "https://icongr.am/feather/smartphone.svg?size=16",
    isSelected: false,
  },
];
function AppointMentSection() {
  const classes = useStyles();
  const [selectedType, setselectedType] = useState("");
  const [selectedSlot, setselectedSlot] = useState("");
  const [timeSlots, settimeSlots] = useState([]);
  const [selectedDay, setselectedDay] = useState("");
  const [days, setdays] = useState([]);
  const [appointmentTypeList, setappointmentTypeList] = useState("");

  useEffect(() => {
    let daysArr = [];
    for (var i = 0; i < 30; i++) {
      const date = dayjs()
        .add(i, "day")
        .millisecond(0)
        .second(0)
        .minute(0)
        .hour(0);
      const key = dayjs(date).format("DD/MM/YYYY");
      daysArr.push({
        key: key,
        date: date,
        isSelected: false,
      });
      setdays(daysArr);
    }
  }, [selectedDay]);

  return (
    <div>
      <div className={classes.AppointmentRoot}>
        <AppointmentTypeComponent
          selectedType={selectedType}
          timeSlots={timeSlots}
          selectedDay={selectedDay}
          days={days}
          appointmentTypeList={appointmentTypeList}
          selectedSlot={selectedSlot}
          setselectedType={setselectedType}
          setselectedSlot={setselectedSlot}
          settimeSlots={settimeSlots}
          setselectedDay={setselectedDay}
          setdays={setdays}
          setappointmentTypeList={setappointmentTypeList}
        />
      </div>
    </div>
  );
}

export default AppointMentSection;

// Appointment Slot
export const SlotComponent = ({
  selectedDay,
  selectedType,
  settimeSlots,
  setselectedSlot,
  selectedSlot,
}) => {
  //   setState({ timeSlots: timeSlots, selectedSlot: null });

  const onTimeSlotSelected = (slot) => {
    let selectedSlot = null;
    const updatedSlots = timeSlots.map((oldSlot) => {
      if (oldSlot.key === slot.key) {
        oldSlot.isSelected = true;
        selectedSlot = oldSlot;
      } else {
        oldSlot.isSelected = false;
      }
      return oldSlot;
    });

    // setState({
    //   timeSlots: updatedSlots,
    //   selectedSlot: selectedSlot,
    // });
    settimeSlots(updatedSlots);
    setselectedSlot(selectedSlot);
  };

  const onSubmitClicked = () => {
    if (selectedType && selectedDay && selectedSlot) {
      // submit
      console.log(
        "submitting",
        "selectedType",
        selectedType,
        "selectedDate",
        selectedDay.date,
        "selectedSlot",
        selectedSlot
      );
    }
  };

  const selectedDate = selectedDay.date;

  //   const timeSlots =  timeSlots;

  const timeSlotsItems = timeSlots.map((slot) => {
    return (
      <Button
        variant="outlined"
        color="primary"
        key={slot.key}
        className={`button primary ${slot.isSelected ? "" : "outline"}`}
        style={{ margin: 8 }}
        onClick={(e) => {
          onTimeSlotSelected(slot);
        }}
      >
        {dayjs(selectedDate)
          .add(slot.minFromMidnight, "minute")
          .format("hh:mm A")}
      </Button>
    );
  });

  let submitButton = (
    <Button
      variant="contained"
      color="primary"
      className="is-full-width button"
      style={{ lineHeight: 2 }}
    >
      Next
    </Button>
  );
  if (selectedSlot) {
    submitButton = (
      <Button
        variant="contained"
        color="primary"
        className="is-full-width button primary"
        style={{ lineHeight: 2 }}
        onClick={(e) => {
          onSubmitClicked(selectedSlot);
        }}
      >
        Next
      </Button>
    );
  }

  return (
    <div>
      <h3
        className="text-uppercase text-primary bold"
        style={{ fontWeight: "lighter", marginLeft: 8 }}
      >
        {dayjs(selectedDate).format("dddd, DD MMM YYYY")}
      </h3>
      <div className="is-full-width">{timeSlotsItems}</div>
      <div
        className="is-full-width is-center"
        style={{ marginTop: 38, margin: 8 }}
      >
        {submitButton}
      </div>
    </div>
  );
};

// Calendar Component
const CalendarComponent = ({
  selectedType,
  setselectedDay,
  setdays,
  setselectedSlot,
  settimeSlots,
  selectedDay,
  days,
  selectedSlot,
}) => {
  //   const _this = this;
  //     setState({ days: days, selectedDay: null });
  const classes = useStyles();
  const selectDateClicked = (day) => {
    let selectedDay = null;
    const updatedDays = days.map((oldDay) => {
      if (oldDay.key === day.key) {
        oldDay.isSelected = true;
        selectedDay = oldDay;
      } else {
        oldDay.isSelected = false;
      }
      return oldDay;
    });
    // setState({
    //   days: updatedDays,
    //   selectedDay: selectedDay,
    // });
    setdays(updatedDays);
    setselectedDay(selectedDay);
  };

  const daysComponent = days.map((day) => (
    <DayComponent
      key={day.key}
      day={day}
      selectDateClicked={(day) => {
        selectDateClicked(day);
      }}
    />
  ));

  let appointmentSlotComponent = <div />;

  if (selectedDay) {
    appointmentSlotComponent = (
      <SlotComponent
        selectedType={selectedType}
        selectedDay={selectedDay}
        settimeSlots={settimeSlots}
        setselectedSlot={setselectedSlot}
        selectedSlot={selectedSlot}
      />
    );
  }

  return (
    <div>
      <Grid className={classes.cardGroup}>{daysComponent}</Grid>
      <div className="slot is-full-width">{appointmentSlotComponent}</div>
    </div>
  );
};

const DayComponent = ({ key, day, selectDateClicked }) => {
  const isSelected = day.isSelected;
  const classes = useStyles();
  const dateObject = day.date;

  const date = dateObject.date();
  const month = dayjs(dateObject).format("MMM");
  const year = dateObject.year();

  return (
    <Grid
      item
      xm={3}
      style={{ width: 80, margin: 4 }}
      onClick={(e) => {
        selectDateClicked(day);
      }}
    >
      <Card>
        <H6 bold>{month}</H6>

        <H6 bold>{date}</H6>
        <H6 bold>{year}</H6>
      </Card>
    </Grid>
  );
};

// Apointment Type
const AppointmentTypeComponent = ({
  selectedType,
  timeSlots,
  selectedDay,
  days,
  appointmentTypeList,
  selectedSlot,
  setselectedType,
  setselectedSlot,
  settimeSlots,
  setselectedDay,
  setdays,
  setappointmentTypeList,
}) => {
  //   setState({ appointmentTypeList: availableTypes });

  const onAppointmentTypeSelected = (appointmentType) => {
    let selectedType = null;
    const updatedTypes = availableTypes.map((oldType) => {
      if (oldType.clinicId === appointmentType.clinicId) {
        oldType.isSelected = true;
        selectedType = oldType;
      } else {
        oldType.isSelected = false;
      }
      return oldType;
    });
    setappointmentTypeList(updatedTypes);
    setselectedType(selectedType);
    // setState({
    //   appointmentTypeList: updatedTypes,
    //   selectedType: selectedType,
    // });
  };

  let calendarComponent = <div />;
  if (selectedType) {
    calendarComponent = (
      <CalendarComponent
        selectedType={selectedType}
        setselectedDay={setselectedDay}
        setdays={setdays}
        settimeSlots={settimeSlots}
        setselectedSlot={setselectedSlot}
        selectedDay={selectedDay}
        selectedSlot={selectedSlot}
        days={days}
      />
    );
  }

  return (
    <div className="is-full-width">
      <h2>Appointment</h2>
      <div className="is-full-width" style={{ marginBottom: 4 }}>
        {availableTypes.map((appointmentType) => (
          <Button
            key={appointmentType.clinicId}
            color="primary"
            variant="outlined"
            style={{ margin: 8 }}
            onClick={(e) => {
              onAppointmentTypeSelected(appointmentType);
            }}
          >
            <img src={appointmentType.iconUrl} alt="icon" />
            <span> </span>
            <span>{appointmentType.type}</span>
          </Button>
        ))}
      </div>
      {calendarComponent}
    </div>
  );
};

// Appointment Component
