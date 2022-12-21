import React, { useState } from "react";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "../styles/CreateTrip.css";
import { useHistory } from "react-router-dom";

export default function CreateTrip({
  handleAddTrip,
  title,
  setTitle,
  cost,
  setCost,
  tripDescription,
  setTripDescription,
  setStart,
  start,
  setEnd,
  end,
  location,
  setLocation,
  spots,
  setSpots,
  setTripId,
  tripId,
  setTripEdit,
  tripEdit,
  handleUpdateTrip,
}) {
  const [error, setError] = useState([]);
  const history = useHistory()

  const handleCreateTrip = (e) => {
    e.preventDefault();
    setError([]);
    const form = {
      location,
      title,
      description: tripDescription,
      start_time: start.$d,
      end_time: end.$d,
      spots: parseInt(spots),
      cost_per_person: cost,
    };
    fetch("/api/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((trip) => handleAddTrip(trip));
        setLocation("");
        setTitle("");
        setTripDescription("");
        setSpots("");
        setCost("");
        setStart(
          dayjs("Tue Nov 08 2022 00:00:00 GMT-0500 (Eastern Standard Time)")
        );
        setEnd(
          dayjs("Tue Nov 08 2022 00:00:00 GMT-0500 (Eastern Standard Time)")
        );
      } else {
        resp.json().then((err) => setError(err.errors));
      }
    });
  };

  const handleEditTrip = (e) => {
    e.preventDefault();
    setError([]);
    const form = {
      location,
      title,
      description: tripDescription,
      start_time: start.$d,
      end_time: end.$d,
      spots: parseInt(spots),
      cost_per_person: cost,
    };
    fetch(`/api/trips/${tripId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((trip) => handleUpdateTrip(trip));
        setLocation("");
        setTitle("");
        setTripDescription("");
        setSpots("");
        setCost("");
        setStart(
          dayjs("Tue Nov 08 2022 00:00:00 GMT-0500 (Eastern Standard Time)")
        );
        setEnd(
          dayjs("Tue Nov 08 2022 00:00:00 GMT-0500 (Eastern Standard Time)")
        );
        setTripEdit(false);
        setTripId(0);
        history.push('/schedules')
      } else {
        resp.json().then((err) => setError(err.errors));
      }
    });
  };

  return (
    <>
      <ul className="errorStyle">
        {error.map((err) => {
          return <li key={err}>{err}</li>;
        })}
      </ul>
      <div className="createStyle">
        <Box
          sx={{
            width: 320,
            height: 450,
            backgroundColor: "primary.dark",
          }}
        >
          <form
            onSubmit={tripEdit ? handleEditTrip : handleCreateTrip}
            style={{ paddingTop: "1rem" }}
          >
            <label className="createLabel">
              Title <br />
              <input
                className=""
                style={{ width: "15rem" }}
                type="text"
                name="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <br />
            <label className="createLabel">
              Location <br />
              <input
                className=""
                style={{ width: "7rem" }}
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
            <br />
            <label className="spotStyle">
              Available Spots
              <br />
              <input
                className=""
                style={{ width: "5rem" }}
                type="text"
                name=""
                value={spots}
                onChange={(e) => setSpots(e.target.value)}
              />
            </label>
            <label className="createLabel">
              Cost Per Person
              <input
                className=""
                style={{ width: "5rem", marginBottom: "1rem" }}
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
                  sx={{ color: "success.main" }}
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
            <label className="createLabel">
              Description
              <br />
              <textarea
                className="descriptionStyle"
                type="text"
                name="description"
                value={tripDescription}
                onChange={(e) => setTripDescription(e.target.value)}
              />
            </label>
            <Button
              variant="text"
              type="submit"
              style={{ color: "white", fontWeight: "bold" }}
            >
              {tripEdit ? "Update Trip" : "Add Trip"}
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
}
