import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

export default function ScheduleForm({ oneTrip }) {
  const users = useSelector((store) => store.users);
  const [error, setError] = useState([]);
  const [spaces, setSpaces] = useState("1");
  const [avSpots, setAvSpots] = useState(oneTrip.spots);
  const history = useHistory();

  const handleAddSchedule = (e) => {
    e.preventDefault();
    setError([]);
    if (users.user.id === undefined) {
      history.push("/login");
    } else {
      const form = {
        trip_id: oneTrip.id,
        amount: parseInt(spaces) * 1 * oneTrip.cost_per_person,
        spaces: parseInt(spaces),
      };
      fetch("/user_trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).then((r) => {
        if (r.ok) {
          r.json().then((trip) => setAvSpots(oneTrip.spots - trip.spaces));
        } else {
          r.json().then((err) => setError(err.errors));
        }
      });
    }
  };

  return (
    <>
      <ul className="errorStyle">
        {error.map((err) => {
          return <li key={err}>{err}</li>;
        })}
      </ul>
      <h5
        className="donateRow"
        style={{
          marginTop: "1rem",
          marginBottom: "1px",
          fontFamily: "CopperPlate",
        }}
      >
        Spots Available: {avSpots}
      </h5>
      <h5
        className="donateRow"
        style={{
          marginTop: "1px",
          marginBottom: "1px",
          fontFamily: "CopperPlate",
        }}
      >
        Cost Per Person: ${oneTrip.cost_per_person}
      </h5>
      <h5
        className="donateRow"
        style={{
          marginTop: "1px",
          marginBottom: "1px",
          fontFamily: "CopperPlate",
        }}
      >
        Estimated Total: ${parseInt(spaces) * 1 * oneTrip.cost_per_person}
      </h5>
      <form
        onSubmit={handleAddSchedule}
        className="donateRow"
        style={{ marginBottom: "1rem" }}
      >
        <label style={{ fontFamily: "CopperPlate" }}>
          Spots <br />
          <select
            className=""
            style={{ width: "10rem" }}
            name="spaces"
            value={spaces}
            onChange={(e) => setSpaces(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <Button
          variant="outlined"
          type="submit"
          style={{ color: "darkgreen", fontWeight: "bold" }}
        >
          Reserve
        </Button>
      </form>
    </>
  );
}
