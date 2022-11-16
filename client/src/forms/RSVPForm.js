import { useState } from "react";
import Button from "@mui/material/Button";

export default function RSVPForm({ spots, spaces, id, cost, showRSVPRemoval }) {
  const [spot, setSpot] = useState(spots);
  const [space, setSpace] = useState(spaces);
  const [oldSpaces, setOldSpaces] = useState(spaces);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = {
      spaces: parseInt(space),
      amount: parseInt(spaces) * 1 * cost,
    };
    fetch(`/user_trips/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((resp) => resp.json())
      .then((update) => handleUpdateSpots(update.spaces));
  };

  const handleUpdateSpots = (newSpaces) => {
    setSpot(spot + oldSpaces - space);
    setOldSpaces(newSpaces);
  };

  const cancelTrip = () => {
    fetch(`/user_trips/${id}`, {
      method: "Delete",
    }).then(() => showRSVPRemoval(id));
  };

  return (
    <>
      <h3 className="donateRow">Spots Available {spot}</h3>
      <h5
        className="donateRow"
        style={{
          marginTop: "1px",
          marginBottom: "1px",
          fontFamily: "CopperPlate",
        }}
      >
        Total: ${parseInt(space) * 1 * cost}
      </h5>
      <h3 className="donateRow">
        RSVP Spots{" "}
        <form onSubmit={handleSubmit}>
          <label style={{ fontFamily: "CopperPlate" }}>
            <select
              className=""
              style={{ width: "10rem" }}
              name="space"
              value={space}
              onChange={(e) => setSpace(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <Button
            variant="contained"
            type="submit"
            style={{ color: "darkgreen", fontWeight: "bold" }}
          >
            update
          </Button>
        </form>
        <Button
          variant="contained"
          onClick={cancelTrip}
          style={{ color: "darkgreen", fontWeight: "bold" }}
        >
          cancel
        </Button>
      </h3>
    </>
  );
}
