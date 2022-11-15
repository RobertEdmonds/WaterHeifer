import { useState } from "react";
import Button from "@mui/material/Button";

export default function Employee({id, status}){
    const [employee, setEmployee] = useState(status);

    const handleEmployee = () => {
        setEmployee(!employee)
        const form = {
            employee: employee
        }
        fetch(`/user_employee_update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        })
      }
    return(
        <Button
            variant="text"
            className="blogRow"
            onClick={() => handleEmployee}
            style={{ color: "darkred", fontWeight: "bold", width: "20%" }}
          >
            {employee ? "Employee" : "Not Employee"}
          </Button>
    )
}