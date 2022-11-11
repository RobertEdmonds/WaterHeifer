import DonateForm from "../forms/DonateForm";
import "../styles/Donate.css";

export default function Donate({ companies }) {
  
  return (
    <>
      {companies.map((company) => {
        return (
          <>
            <div key={company.id} className="donateColumn">
            <h3 className="donateRow" style={{ marginBottom: "1px" }}>
                {company.name}
              </h3>
              <p
                className="donateRow"
                style={{ marginTop: "5px", height: "12rem", fontSize: "small", scrollBehavior: "smooth", overflowY: "scroll" }}
              >
                {company.description}
              </p>
              <h6 className="donateRow" style={{ marginTop: "1px" }}>
                Total Donated: $ {company.total_donation}
              </h6>
              <DonateForm />
            </div>
            
            {/* <div className="donateImage"></div> */}
          </>
        );
      })}
      {/* <div style={{backgroundImage: "url('https://freesvg.org/img/1543178897.png')"}}>
            <h1>Donate</h1>
        </div> */}
    </>
  );
}
