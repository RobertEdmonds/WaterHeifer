export default function TimeOfTrips({startTime, endTime}){
    const start = new Date(startTime)
    const end = new Date(endTime)
    
    return(
        <>
        <h5 className="donateRow" style={{marginBottom: "1px", marginTop: "1rem"}}>Start Time</h5>
        <p className="donateRow" style={{marginBottom: "1rem", marginTop: "1px"}}>{start.getMonth()}/{start.getDate()}/{start.getFullYear()} Time {start.getHours()}:{start.getMinutes()}</p>
        <h5 className="donateRow" style={{marginBottom: "1px", marginTop: "1rem"}}>End Time</h5>
        <p className="donateRow" style={{marginBottom: "1rem", marginTop: "1px"}}>{end.getMonth()}/{end.getDate()}/{end.getFullYear()} Time {end.getHours()}:{end.getMinutes()}</p>
        </>
    )
}