import { useState } from "react";
import Button from "@mui/material/Button";

export default function DonateForm({ compId, totalD }) {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(totalD);

  function handleAmount(pay) {
    setAmount(pay);
  }

  const handleAddPayment = () => {
    const form = {
      amount: amount,
      company_id: compId,
    };
    fetch("/donations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((resp) => resp.json())
      .then((payment) => setTotal(total + payment.amount));
    setAmount(0);
  };
  return (
    <>
      <h6 className="donateRow" style={{ marginTop: "1px" }}>
        Total Donated: $ {total}
      </h6>
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
        <Button variant="contained" size="small" onClick={handleAddPayment}>
          donate
        </Button>
      </div>
    </>
  );
}
