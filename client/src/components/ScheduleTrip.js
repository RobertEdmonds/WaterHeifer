import ScheduleForm from "../forms/ScheduleForm";
import TimeOfTrips from "./TimeOfTrips";

export default function ScheduleTrip({ trips }) {

  return (
    <>
      {trips.map((trip) => {
        return (
        <div key={trip.id} className="donateColumn">
            <h3 className="donateRow" style={{marginBottom: "1rem", marginTop: "2rem"}}>{trip.title}</h3>
            <h5 className="donateRow" style={{marginBottom: "1rem", marginTop: "1rem"}}>{trip.location}</h5>
            <p className="donateRow" style={{marginBottom: "1rem", marginTop: "1rem"}}>{trip.description}</p>
            <TimeOfTrips startTime={trip.start_time} endTime={trip.end_time} />
            <h5 className="donateRow" style={{marginTop: "1rem", marginBottom: "1px"}}>Spots Available: {trip.spots}</h5>
            <h5 className="donateRow" style={{marginTop: "1px", marginBottom: "1px"}}>Cost Per Person: ${trip.cost_per_person}</h5>
            <ScheduleForm oneTrip={trip}/>
        </div>
        )
      })}
    </>
  );
}
