export default function ProfileDonation({donations, companies}){
    return(
        <>
        {donations.map(donation => {
            const company = companies.find(business => business.id === donation.company_id)
            return(
                <div key={donation.id} className="rsvpStyle">
                    <h3>{company.name}</h3>
                    <h3>Tax ID: <br/> {company.tax_number}</h3>
                    <h3>Donated Amount: {donation.amount}</h3>
                </div>
            )
        })}
        </>
    )
}