import { useState } from "react";
import Button from "@mui/material/Button";

export default function DonateForm() {
  const [amount, setAmount] = useState(0);

  function handleAmount(pay) {
    setAmount(pay);
  }
  console.log(amount);
  return (
    <div className="donateRow">
      <Button
        variant="outlined"
        size="small"
        sx={{
          width: 10,
          height: 25,
          backgroundColor: "primary",
          fontFamily: ["Copperplate"].join(","),
          "&:hover": {
            backgroundColor: "white",
            borderColor: "#0062cc",
            boxShadow: "none",
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
            backgroundColor: "white",
          },
        }}
        onClick={() => handleAmount(5)}
      >
        $5
      </Button>
      <Button
        variant="outlined"
        size="small"
        sx={{
          width: 10,
          height: 25,
          backgroundColor: "primary",
          fontFamily: ["Copperplate"].join(","),
          "&:hover": {
            backgroundColor: "white",
            borderColor: "#0062cc",
            boxShadow: "none",
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
            backgroundColor: "white",
          },
        }}
        onClick={() => handleAmount(10)}
      >
        $10
      </Button>
      <Button
        variant="outlined"
        size="small"
        sx={{
          width: 10,
          height: 25,
          backgroundColor: "primary",
          fontFamily: ["Copperplate"].join(","),
          "&:hover": {
            backgroundColor: "white",
            borderColor: "#0062cc",
            boxShadow: "none",
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
            backgroundColor: "white",
          },
        }}
        onClick={() => handleAmount(25)}
      >
        $25
      </Button>
      <Button
        variant="outlined"
        size="small"
        sx={{
          width: 10,
          height: 25,
          backgroundColor: "primary",
          fontFamily: ["Copperplate"].join(","),
          "&:hover": {
            backgroundColor: "white",
            borderColor: "#0062cc",
            boxShadow: "none",
          },
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
            backgroundColor: "white",
          },
        }}
        onClick={() => handleAmount(50)}
      >
        $50
      </Button>
      <Button variant="contained" size="small">
        donate
      </Button>
    </div>
  );
}
