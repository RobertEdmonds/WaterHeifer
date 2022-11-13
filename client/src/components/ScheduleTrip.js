import ScheduleForm from "../forms/ScheduleForm";
import TimeOfTrips from "./TimeOfTrips";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
}) {
  const users = useSelector((store) => store.users);
  const history = useHistory()

  const setEditForm = (trip) => {
    setTitle(trip.title)
  setLocation(trip.location)
  setTripDescription(trip.description)
  setSpots(trip.spots)
  setCost(trip.cost_per_person)
  setStart(trip.start_time)
  setEnd(trip.end_time)
  setTripId(trip.id)
  setTripEdit(true)
  history.push("/create_trip")
  };

  const deleteTrip = (id) => {
    fetch(`/trips/${id}`, {
      method: "DELETE",
    }).then(removeTrip(id));
  };

  return (
    <>
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
            <ScheduleForm oneTrip={trip} />
            {users.user.employee && (
              <>
                <Button variant="contained" onClick={() => setEditForm(trip)}>
                  Edit
                </Button>
                <Button
                  variant="contained"
                  onClick={() => deleteTrip(trip.id)}
                >
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
