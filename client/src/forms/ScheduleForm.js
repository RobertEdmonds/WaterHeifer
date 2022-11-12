import { useState } from "react";
import Button from "@mui/material/Button";

export default function ScheduleForm({oneTrip}){
    const [error, setError] = useState([])
    const [spaces, setSpaces] = useState('')
    const [cost, setCost] = useState(oneTrip.cost_per_person)

    const handleAddSchedule = (e) => {
        e.preventDefault()

    }

    return(
            <>
      <ul className="errorStyle">
        {error.map((err) => {
          return <li key={err}>{err}</li>;
        })}
      </ul>
          <form onSubmit={handleAddSchedule} className="donateRow" style={{ marginBottom: "1rem"}}>
            <label style={{fontWeight: "bold"}}>
                Spots <br/>
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
    )
}