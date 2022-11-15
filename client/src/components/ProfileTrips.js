import RSVPForm from "../forms/RSVPForm";
import TimeOfTrips from "./TimeOfTrips";
import "../styles/ProfileTrips.css";

export default function ProfileTrips({ rsvp, showRSVPRemoval }) {
  return (
    <div style={{ height: `${rsvp.length * 24}rem` }}>
      {rsvp.map((trip) => {
        return (
          <div key={trip.id} className="rsvpStyle">
            <h3 className="donateRow">Location: {trip.location}</h3>
            <TimeOfTrips startTime={trip.start_time} endTime={trip.end_time} />
            <RSVPForm
              spots={trip.spots}
              spaces={trip.spaces_taken}
              id={trip.reservation_id}
              amountOwe={trip.amount_owe}
              cost={trip.cost_per_person}
              showRSVPRemoval={showRSVPRemoval}
            />
          </div>
        );
      })}
    </div>
  );
}
