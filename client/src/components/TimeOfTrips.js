export default function TimeOfTrips({ startTime, endTime }) {
  const start = new Date(startTime);
  const end = new Date(endTime);

  return (
    <>
      <h5
        className="donateRow"
        style={{
          marginBottom: "1px",
          marginTop: "1rem",
          fontFamily: "CopperPlate",
        }}
      >
        Start Time
      </h5>
      <p
        className="donateRow"
        style={{ marginBottom: "1rem", marginTop: "1px" }}
      >
        {(start.getMonth() + 1)}/{start.getDate()}/{start.getFullYear()} Time{" "}
        {start.getHours()}:{start.getMinutes()}
      </p>
      <h5
        className="donateRow"
        style={{
          marginBottom: "1px",
          marginTop: "1rem",
          fontFamily: "CopperPlate",
        }}
      >
        End Time
      </h5>
      <p
        className="donateRow"
        style={{ marginBottom: "1rem", marginTop: "1px" }}
      >
        {(end.getMonth() + 1)}/{end.getDate()}/{end.getFullYear()} Time{" "}
        {end.getHours()}:{end.getMinutes()}
      </p>
    </>
  );
}
