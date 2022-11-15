import { useEffect } from "react";
import { useSelector } from "react-redux";
import DonateForm from "../forms/DonateForm";
import Button from "@mui/material/Button";
import "../styles/Donate.css";
import { useHistory } from "react-router-dom";

export default function Donate({
  companies,
  setCompanyName,
  setTax,
  setCompanyDescript,
  setCompanyId,
  setCompanyEdit,
  removeCompany,
}) {
  const users = useSelector((store) => store.users);
  const history = useHistory();
  const setEditForm = (company) => {
    setCompanyName(company.name);
    setTax(company.tax_number);
    setCompanyDescript(company.description);
    setCompanyId(company.id);
    setCompanyEdit(true);
    history.push("/add_company");
  };

  const deleteCompany = (id) => {
    fetch(`/companies/${id}`, {
      method: "DELETE",
    }).then(removeCompany(id));
  };

  useEffect(() => {
    if (users.user) {
      history.push("/donate");
    }
  }, [users.user, history]);

  const pushToLogin = () => {
    history.push("/login")
  }

  return (
    <>
      {companies.map((company) => {
        return (
          <div key={company.id} className="donateColumn">
            <h3
              className="donateRow"
              style={{
                marginBottom: "1px",
                marginTop: "20px",
                fontFamily: "CopperPlate",
              }}
            >
              {company.name}
            </h3>
            <p
              className="donateRow"
              style={{
                marginTop: "5px",
                height: "12rem",
                fontSize: "small",
                scrollBehavior: "smooth",
                overflowY: "scroll",
              }}
            >
              {company.description}
            </p>
            {!!users.user ? (
              <DonateForm compId={company.id} totalD={company.total_donation} />
            ) : (
              <Button
                variant="contained"
                size="small"
                sx={{ marginBottom: "4.5rem", marginTop: "1.5rem", marginLeft: "4.5rem" }}
                onClick={pushToLogin}
              >
                donate
              </Button>
            )}
            {users.user && users.user.employee && (
              <>
                <Button
                  variant="contained"
                  onClick={() => setEditForm(company)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  onClick={() => deleteCompany(company.id)}
                >
                  delete
                </Button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
