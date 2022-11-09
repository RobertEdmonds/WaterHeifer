import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function AddCompany({handleNewCompany}) {
  const [name, setName] = useState("");
  const [tax, setTax] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState([]);

  const handleAddCompany = (e) => {
    e.preventDefault()
    setError([])
    const form = {
        name,
        tax_number: tax,
        description,
    }
    fetch("/companies", {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((resp) => {
        if(resp.ok){
            resp.json().then(company => handleNewCompany(company))
            setName("")
            setTax("")
            setDescription("")
        }else{
            resp.json().then(err => setError(err.errors))
        }
    })
  };
  return (
    <>
      <ul className="errorStyle">
        {error.map((err) => {
          return <li key={err}>{err}</li>;
        })}
      </ul>
      <div className="createStyle">
        <Box
          sx={{
            width: 320,
            height: 275,
            backgroundColor: "primary.dark",
            //   "&:hover": {
            //     backgroundColor: "primary.main",
            //     opacity: [0.9, 0.8, 0.7],
            //   },
          }}
        >
          <form onSubmit={handleAddCompany} style={{ paddingTop: "1rem" }}>
            <label className="createLabel">
              Company Name <br />
              <input
                className=""
                style={{ width: "15rem" }}
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label className="createLabel">
              Tax ID <br />
              <input
                className=""
                style={{ width: "15rem" }}
                type="text"
                name="tax"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
              />
            </label>
            <label className="createLabel">
              Description
              <br />
              <textarea
                className="descriptionStyle"
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <Button
              variant="text"
              type="submit"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Add Company
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
}
