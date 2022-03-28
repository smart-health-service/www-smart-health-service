import { Chip, IconButton, Link, MenuItem } from "@material-ui/core";
import { FormControl, InputLabel, Select } from "@mui/material";
import React, { useState } from "react";
import VideoCameraFrontRoundedIcon from "@mui/icons-material/VideoCameraFrontRounded";
import CommonTextField from "../common/textfields/CommonTextField";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  statusAdminRoot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // width: "25%",
  },
}));

const StatusCard = ({ user, row, updateAppStatus }) => {
  const classes = useStyles();
  const [status, setstatus] = useState(row?.status);
  const [room, setRoom] = useState(row?.room);

  const updateStatus = (status, _id, roomId) => {
    const data = {
      _id,
      status,
    };
    if (roomId) {
      data["roomId"] = roomId;
    }
    if (user.isDoctor) {
      updateAppStatus(data);
      setstatus(status);
    }
  };
  return (
    <>
      {user.isDoctor ? (
        <>
          <div className={classes.statusAdminRoot}>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-sautowidth"
                value={status}
                onChange={(e) => updateStatus(e.target.value, row._id)}
                label="status"
                autoWidth
              >
                <MenuItem value={"completed"}>completed</MenuItem>
                <MenuItem value={"cancelled"}>cancelled</MenuItem>
                <MenuItem value={"scheduled"}>scheduled</MenuItem>
              </Select>
            </FormControl>
            <CommonTextField
              variant="outlined"
              label="room_id"
              value={room}
              onChange={(e) => {
                setRoom(e.target.value);
                updateStatus(status, row._id, e.target.value);
              }}
            />
          </div>
        </>
      ) : (
        <>
          {row?.status === "completed" && (
            <Chip
              label="completed"
              color="primary"
              // variant="outlined"
            />
          )}
          {row?.status === "cancelled" && (
            <Chip label="cancelled" color="error" variant="outlined" />
          )}
          {row?.status === "scheduled" && (
            <Chip label="scheduled" color="secondary" variant="outlined" />
          )}
        </>
      )}
    </>
  );
};

export default StatusCard;
