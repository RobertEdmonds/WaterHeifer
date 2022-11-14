import Box from "@mui/material/Box";

export default function TripFilter({ month, setMonth }) {
  return (
    <Box
      sx={{
        width: 340,
        height: 37,
        backgroundColor: "primary.dark",
      }}
    >
      <form style={{ paddingTop: ".5rem", paddingLeft: "5px" }}>
        <label className="createLabel">
          Choose Your Month:
          <select
            className=""
            style={{ width: "10rem" }}
            name="spaces"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
            <option value="All">All</option>
          </select>
        </label>
      </form>
    </Box>
  );
}
