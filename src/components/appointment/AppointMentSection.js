import { Card, Grid } from "@material-ui/core";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import React, { Component, useEffect, useState } from "react";
import { H5, H6 } from "../common/typography/Header";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  AppointmentRoot: {
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
  selectedDate: {
    "&>div": {
      backgroundColor: "#9c27b0",
      "&>h6": {
        color: "#FFFFFF",
      },
    },
  },
}));

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
const timeSlots = [
  {
    time: dayjs("2021-12-27").add(600, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(630, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(660, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(690, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(720, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(750, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(840, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(870, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(900, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(930, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(990, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(1020, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(1050, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(1080, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(1110, "minute").format("hh:mm A"),
    isSelected: false,
  },
  {
    time: dayjs("2021-12-27").add(1140, "minute").format("hh:mm A"),
    isSelected: false,
  },
];
//
let BookedSlot = [{ time: "11:30 AM" }];

function AppointMentSection() {
  const classes = useStyles();
  const [selectedType, setselectedType] = useState("");
  const [selectedSlot, setselectedSlot] = useState("");
  const [timeSlots, settimeSlots] = useState([]);
  const [selectedDay, setselectedDay] = useState("");
  const [days, setdays] = useState([]);
  const [appointmentTypeList, setappointmentTypeList] = useState("");

  const [pickedSlot, setPickedSlot] = useState("");

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
  }, []);

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
          setPickedSlot={setPickedSlot}
          pickedSlot={pickedSlot}
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
  setPickedSlot,
  pickedSlot,
}) => {
  //   setState({ timeSlots: timeSlots, selectedSlot: null });

  const onTimeSlotSelected = (slot, key) => {
    let selectedSlot = null;
    const updatedSlots = timeSlots.map((oldSlot, oldKey) => {
      if (key === oldKey) {
        oldSlot.isSelected = true;
        selectedSlot = oldSlot;
      } else {
        oldSlot.isSelected = false;
      }
      return oldSlot;
    });
    setPickedSlot(
      dayjs(selectedDate).add(slot.minFromMidnight, "minute").format("hh:mm")
    );
    // setState({
    //   timeSlots: updatedSlots,
    //   selectedSlot: selectedSlot,
    // });
    settimeSlots(updatedSlots);
    setselectedSlot(selectedSlot);
  };

  const selectedDate = selectedDay.date;

  console.log(timeSlots);
  const timeSlotsItems = timeSlots.map((slot, key) => {
    BookedSlot.map((elem) => {
      if (slot.time === elem.time) {
        slot["booked"] = true;
        console.log(slot);
      }
    });
    return (
      <Button
        color={slot.booked ? "error" : "secondary"}
        key={slot.key}
        // className={`button primary ${slot.isSelected ? "" : "outline"}`}
        variant={slot.isSelected ? "contained" : "outlined"}
        disabled={slot.booked}
        style={{ margin: 8 }}
        onClick={(e) => {
          onTimeSlotSelected(slot, key);
        }}
      >
        {slot?.time}
      </Button>
    );
  });

  const onSubmitClicked = () => {
    if (selectedType && selectedDay && selectedSlot) {
      // submit
      console.log({
        date: dayjs(selectedDate).format("YYYY-MM-DD"),
        time: pickedSlot,
      });
    }
  };

  return (
    <div>
      <h3 style={{ margin: 0, marginTop: 8 }}>
        {dayjs(selectedDate).format("dddd, DD MMM YYYY")}
      </h3>
      <div className="is-full-width">{timeSlotsItems}</div>
      <div
        className="is-full-width is-center"
        style={{ marginTop: 38, margin: 8 }}
      >
        {pickedSlot && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onSubmitClicked()}
          >
            Book
          </Button>
        )}
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
  pickedSlot,
  setPickedSlot,
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
        setPickedSlot={setPickedSlot}
        pickedSlot={pickedSlot}
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

const DayComponent = ({ day, selectDateClicked }) => {
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
      className={classNames(day.isSelected && classes.selectedDate)}
    >
      <Card>
        <H6 bold>{month}</H6>
        {day.isSelected}
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
  setPickedSlot,
  pickedSlot,
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
        setPickedSlot={setPickedSlot}
        days={days}
        pickedSlot={pickedSlot}
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
            color="secondary"
            variant={appointmentType.isSelected ? "contained" : "outlined"}
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
