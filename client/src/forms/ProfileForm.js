import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userUpdated } from "../features/users/userSlice";
import Box from "@mui/material/Box";
import ProfileTrips from "../components/ProfileTrips";
import ProfileDonation from "../components/ProfileDonation";

export default function ProfileForm() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch()
  const [email, setEmail] = useState(users.user.email)
  const [name, setName] = useState(users.user.name)
  const [phone, setPhone] = useState(users.user.phone_number)
  const [error, setError] = useState([])
  const [showTrips, setShowTrips] = useState(false)
  const [showDonation, setShowDonation] = useState(false)
//   console.log(dispatch(userUpdated));
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = {
        name: name.toUpperCase(),
        email: email.toUpperCase(),
        phone_number: phone
    }
    fetch(`/user_update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => dispatch(userUpdated(user)));
        } else {
          resp.json((err) => setError(err.errors));
        }
      });
  }

  return (
    <>
    <h2 style={{borderTop: "solid", borderBottom: "solid"}}>Profile</h2>
      <div className="signUpDiv">
        {error.map((err) => {
          return (
            <h4 className="errorSignUp" key={err}>
              {err}
            </h4>
          );
        })}
        <Box
          sx={{
            width: 300,
            height: 200,
            backgroundColor: "primary.dark"
          }}
        >
          <form className="signUpStyle" onSubmit={handleSubmit}>
            <label className="labelStyle">
              <span>* </span>Email Address
              <br />
              <input
                className="inputStyle"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
              />
            </label>
            <br />
            <label className="labelStyle">
              <span>* </span>Full Name
              <br />
              <input
                className="inputStyle"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label className="labelStyle">
              <span>* </span>Phone Number
              <br />
              <input
                className="inputStyle"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.trim())}
              />
            </label>
            <br />
            <button type="submit" className="signUpButton">
             Save
            </button>
          </form>
        </Box>
      </div>
      <h2 style={{borderTop: "solid", borderBottom: "solid"}} onClick={() => setShowTrips(!showTrips)}>Trips</h2>
      {showTrips ? (<ProfileTrips rsvp={users.user.rsvp_events}/>) : (<></>)}
      <h2 style={{borderTop: "solid", borderBottom: "solid"}} onClick={() => setShowDonation(!showDonation)}>Donations</h2>
      {showDonation ? (<ProfileDonation />) : (<></>)}
    </>
  );
}
