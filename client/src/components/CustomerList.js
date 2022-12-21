import { useEffect, useState } from "react";
import Employee from "../forms/Employee";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((resp) => resp.json())
      .then((cust) => setCustomers(cust));
  }, []);

  return (
    <div>
      {customers.map((person) => {
        return (
          <div className="rsvpStyle" style={{ marginBottom: "1px" }}>
            <h1
              className="blogRow"
              style={{ marginBottom: "1px", backgroundColor: "white" }}
            >
              {person.name}
            </h1>
            <h3
              className="blogRow"
              style={{ marginBottom: "1px", marginTop: "1px" }}
            >
              {person.email}
            </h3>
            <h3
              className="blogRow"
              style={{ marginBottom: "1px", marginTop: "1px" }}
            >
              {person.phone_number}
            </h3>
            <Employee id={person.id} status={person.employee} />
          </div>
        );
      })}
    </div>
  );
}
