import DonateForm from "../forms/DonateForm";
import "../styles/Donate.css";

export default function Donate({ companies }) {

  return (
    <>
      {companies.map((company) => {
        return (
          <div key={company.id} className="donateColumn">
            <h3 className="donateRow" style={{ marginBottom: "1px", fontFamily: "CopperPlate" }}>
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
            <DonateForm compId={company.id} totalD={company.total_donation} />
          </div>
        );
      })}
    </>
  );
}
