import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function AddCompany({
  handleNewCompany,
  companyName,
  setCompanyName,
  tax,
  setTax,
  companyDescript,
  setCompanyDescript,
  setCompanyId,
  companyId,
  setCompanyEdit,
  companyEdit,
  handleUpdateCompany,
}) {
  const [error, setError] = useState([]);

  const handleAddCompany = (e) => {
    e.preventDefault();
    setError([]);
    const form = {
      name: companyName,
      tax_number: tax,
      description: companyDescript,
    };
    fetch("/api/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((company) => handleNewCompany(company));
        setCompanyName("");
        setTax("");
        setCompanyDescript("");
      } else {
        resp.json().then((err) => setError(err.errors));
      }
    });
  };

  const handleEditCompany = (e) => {
    e.preventDefault();
    const form = {
      name: companyName,
      tax_number: tax,
      description: companyDescript,
    };
    fetch(`/api/companies/${companyId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((company) => handleUpdateCompany(company));
        setCompanyName("");
        setTax("");
        setCompanyDescript("");
        setCompanyId(0);
        setCompanyEdit(false);
      } else {
        resp.json().then((err) => setError(err.errors));
      }
    });
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
          }}
        >
          <form
            onSubmit={companyEdit ? handleEditCompany : handleAddCompany}
            style={{ paddingTop: "1rem" }}
          >
            <label className="createLabel">
              Company Name <br />
              <input
                className=""
                style={{ width: "15rem" }}
                type="text"
                name="name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
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
                value={companyDescript}
                onChange={(e) => setCompanyDescript(e.target.value)}
              />
            </label>
            <Button
              variant="text"
              type="submit"
              style={{ color: "white", fontWeight: "bold" }}
            >
              {companyEdit ? "Update Company" : "Add Company"}
            </Button>
          </form>
        </Box>
      </div>
    </>
  );
}
