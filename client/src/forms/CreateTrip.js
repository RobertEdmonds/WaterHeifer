import React, { useState } from "react";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "../styles/CreateTrip.css"

export default function CreateTrip() {
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [start, setStart] = useState(dayjs("Tue Nov 08 2022 00:00:00 GMT-0500 (Eastern Standard Time)"));
  const [end, setEnd] = useState(dayjs("Tue Nov 08 2022 00:00:00 GMT-0500 (Eastern Standard Time)"));
  const [spots, setSpots] = useState("");
  const [cost, setCost] = useState("");

  const handleCreateTrip = (e) => {
    e.preventDefault();
  };
  console.log(start.$d)
  return (
    <div>
      <Box
        sx={{
          width: 300,
          height: 320,
          backgroundColor: "primary.dark",
          //   "&:hover": {
          //     backgroundColor: "primary.main",
          //     opacity: [0.9, 0.8, 0.7],
          //   },
        }}
      >
        <form onSubmit={handleCreateTrip}>
          <label className="">
            Title <br/>
            <input
              className=""
              style={{ width: "25rem" }}
              type="text"
              name="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <br />
          <label className="">
            Location <br/>
            <input
              className=""
              style={{ width: "7rem" }}
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <br/>
          <label className="">
            Available Spots<br/>
            <input
              className=""
              style={{ width: "5rem" }}
              type="text"
              name=""
              value={spots}
              onChange={(e) => setSpots(e.target.value)}
            />
          </label>
          <label className="">
            Cost Per Person:
            <input
              className=""
              style={{ width: "5rem" }}
              type="text"
              name="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </label>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DateTimePicker
                label="Start Time"
                value={start}
                onChange={(e) => setStart(e)}
                renderInput={(params) => <TextField {...params} />}
              />
              <DateTimePicker
                label="End Time"
                value={end}
                onChange={(e) => setEnd(e)}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
          <label className="">
            Description:
            <br />
            <textarea
              className=""
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </form>
      </Box>
    </div>
  );
}
