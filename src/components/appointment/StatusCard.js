import { Chip, MenuItem } from "@material-ui/core";
import { FormControl, InputLabel, Select } from "@mui/material";
import React, { useState } from "react";

const StatusCard = ({ user, row, updateAppStatus }) => {
  const [status, setstatus] = useState(row?.status);

  const updateStatus = (status, id) => {
    if (user.isDoctor) {
      updateAppStatus({ status, _id: id });
      setstatus(status);
    }
  };
  return (
    <>
      {user.isDoctor ? (
        <>
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
