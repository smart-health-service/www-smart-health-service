import { Card, DialogContentText, DialogTitle, Grid } from "@material-ui/core";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import React, { Component, useEffect, useState } from "react";
import { H5, H6 } from "../common/typography/Header";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogActions, DialogContent } from "@mui/material";

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

//
let BookedSlot = [{ time: "11:30 AM" }];
const defaultTimeSlots = [
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

function AppointMentSection({ createAppointment, getBookedSlots }) {
  const classes = useStyles();
  const [selectedType, setselectedType] = useState("");
  const [selectedSlot, setselectedSlot] = useState("");
  const [timeSlots, settimeSlots] = useState([...defaultTimeSlots]);
  const [selectedDay, setselectedDay] = useState("");
  const [days, setdays] = useState([]);
  const [appointmentTypeList, setappointmentTypeList] = useState("");

  const [pickedSlot, setPickedSlot] = useState("");

  const { id } = useParams();

  const isBookedSlotsLoading = useSelector(
    (state) => state.appointment.isBookedSlotsLoading
  );
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

  useEffect(() => {
    if (selectedDay?.key) {
      let date = dayjs(selectedDay.date).format("YYYY-MM-DD");
      timeSlots.map((elem) => {
        elem["booked"] = false;
      });
      settimeSlots([...defaultTimeSlots]);

      getBookedSlots(id, date);
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
          setPickedSlot={setPickedSlot}
          pickedSlot={pickedSlot}
          createAppointment={createAppointment}
          getBookedSlots={getBookedSlots}
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
  createAppointment,
  getBookedSlots,
}) => {
  //   setState({ timeSlots: timeSlots, selectedSlot: null });

  const { id } = useParams();

  const onTimeSlotSelected = (slot, key) => {
    let selectedSlot = null;
    const updatedSlots = defaultTimeSlots.map((oldSlot, oldKey) => {
      if (key === oldKey) {
        oldSlot.isSelected = true;
        selectedSlot = oldSlot;
      } else {
        oldSlot.isSelected = false;
      }
      return oldSlot;
    });

    setPickedSlot(slot?.time);
    settimeSlots(updatedSlots);
    setselectedSlot(selectedSlot);
  };

  const selectedDate = selectedDay.date;

  const bookedSlots = useSelector((state) => state.appointment.bookedSlots);
  const isBookedSlotsLoading = useSelector(
    (state) => state.appointment.isBookedSlotsLoading
  );

  const timeSlotsItems = defaultTimeSlots.map((slot, key) => {
    !isBookedSlotsLoading &&
      bookedSlots?.map((elem) => {
        if (slot.time === elem.time) {
          slot["booked"] = true;
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

  const user = useSelector((state) => state.user.userData);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    let data = {
      creator: user._id,
      notifier: id,
      date: dayjs(selectedDate).format("YYYY-MM-DD"),
      time: pickedSlot,
    };
    createAppointment(data);
    let date = dayjs(selectedDay.date).format("YYYY-MM-DD");
    getBookedSlots(id, date);
  };

  const onSubmitClicked = () => {
    if (selectedType && selectedDay && selectedSlot) {
      setOpen(true);
    }
  };
  console.log(selectedSlot, "picked");
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
            disabled={selectedSlot?.booked}
          >
            Book
          </Button>
        )}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Please confirm your date and Time...
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              date:{dayjs(selectedDate).format("YYYY-MM-DD")}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              time:{pickedSlot}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancle</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
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
  createAppointment,
  getBookedSlots,
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
        createAppointment={createAppointment}
        getBookedSlots={getBookedSlots}
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
  createAppointment,
  getBookedSlots,
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
        createAppointment={createAppointment}
        getBookedSlots={getBookedSlots}
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
