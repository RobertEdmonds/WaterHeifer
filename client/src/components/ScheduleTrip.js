import { useState, useEffect } from "react";
import ScheduleForm from "../forms/ScheduleForm";
import TimeOfTrips from "./TimeOfTrips";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import TripFilter from "../forms/TripFilter";

export default function ScheduleTrip({
  trips,
  setTitle,
  setLocation,
  setTripDescription,
  setSpots,
  setCost,
  setStart,
  setEnd,
  setTripId,
  setTripEdit,
  removeTrip,
  month,
  setMonth,
}) {
  const users = useSelector((store) => store.users);
  const history = useHistory();
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (users.user) {
      history.push("/schedules");
    }
  }, [users.user, history]);

  const pushToLogin = () => {
    history.push("/login");
  };

  const setEditForm = (trip) => {
    setTitle(trip.title);
    setLocation(trip.location);
    setTripDescription(trip.description);
    setSpots(trip.spots);
    setCost(trip.cost_per_person);
    setStart(trip.start_time);
    setEnd(trip.end_time);
    setTripId(trip.id);
    setTripEdit(true);
    history.push("/create_trip");
  };

  const deleteTrip = (id) => {
    fetch(`/trips/${id}`, {
      method: "DELETE",
    }).then(removeTrip(id));
  };

  const handleTripFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <h3 onClick={handleTripFilter}>Click To Filter</h3>
      {showFilter ? <TripFilter month={month} setMonth={setMonth} /> : <></>}
      {trips.length === 0 && (
        <h1 style={{ color: "red" }}>Sorry No Scheduled Trips At This Time</h1>
      )}
      {trips.map((trip) => {
        return (
          <div key={trip.id} className="donateColumn">
            <h3
              className="donateRow"
              style={{
                marginBottom: "1rem",
                marginTop: "2rem",
                fontFamily: "CopperPlate",
              }}
            >
              {trip.title}
            </h3>
            <h5
              className="donateRow"
              style={{
                marginBottom: "1rem",
                marginTop: "1rem",
                fontFamily: "CopperPlate",
              }}
            >
              {trip.location}
            </h5>
            <p
              className="donateRow"
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
            >
              {trip.description}
            </p>
            <TimeOfTrips startTime={trip.start_time} endTime={trip.end_time} />
            {!!users.user ? (
              <ScheduleForm oneTrip={trip} />
            ) : (
              <Button
                variant="outlined"
                onClick={pushToLogin}
                className="donateRow"
                style={{
                  color: "darkgreen",
                  fontWeight: "bold",
                  marginBottom: "6rem",
                  marginLeft: "4.5rem",
                }}
              >
                Reserve
              </Button>
            )}
            {users.user && users.user.employee && (
              <>
                <Button variant="contained" onClick={() => setEditForm(trip)}>
                  Edit
                </Button>
                <Button variant="contained" onClick={() => deleteTrip(trip.id)}>
                  delete
                </Button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
