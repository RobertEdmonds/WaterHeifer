import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Route } from "react-router-dom";
// import { fetchUser, addUser, deleteUser, logInUser} from './features/users/userSlice.js'
import { fetchUser } from '../features/users/userSlice.js'
import Home from "./Home.js";
import Header from "./Header.js";
import ScheduleTrip from "./ScheduleTrip.js";
import SignUp from "../forms/SignUp.js";
import LogIn from "../forms/LogIn.js";
import CreateTrip from '../forms/CreateTrip.js';
import AddCompany from '../forms/AddCompany.js';
// import NavBar from './components/NavBar.js';

function App() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch()
  // // console.log(!!user.user.errors)
  // console.log(user)
  useEffect(() => {
    dispatch(fetchUser())
  },[dispatch])
  // const handleDispatch = () => {
  //   const form = {
  //     name: "Jeff",
  //     email: "Jeff@gmail.com",
  //     password: "Hello",
  //     password_confirmation: "Hello",
  //     phone_number: parseInt("1234567892"),
  //   }
  //   dispatch(addUser(form))
  // }

  // const handleLogin = () => {
  //   const form = {
  //     email: "tim@gmail.com",
  //     password: "Hello"
  //   }
  //   dispatch(logInUser(form))
  // }

  // const handleDeleteDispatch = () =>{
  //   dispatch(deleteUser())
  // }

  // const makeTrip = () => {
  //   const form = {
  //     title: "fishing",
  //     description: "Poles and things",
  //     start_time: "2003-09-23 12:42:06",
  //     end_time: "2003-09-23 12:48:06",
  //     location: "Denver",
  //     spots: 5,
  //     cost_per_person: 35
  //   }
  //   fetch("/trips", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form)
  //   })
  //   .then(r => r.json())
  //   .then(trip => console.log(trip))
  // }
  // const displayTrips = () => {
  //   fetch("/trips")
  //   .then(r => r.json())
  //   .then(trip => console.log(trip))
  // }

  // const addTrip = () => {
  //   const form = {
  //     trip_id: 1,
  //     amount: 70,
  //     spaces: 2,
  //     // attendees:
  //   }
  //   fetch("/user_trips", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form)
  //   })
  //   .then(r => r.json())
  //   .then(trip => console.log(trip))
  // }

  // const deleteTrip = () => {
  //   fetch("/user_trips/7", {
  //     method: "DELETE"
  //   })
  // }

  const handleAddTrip = (newTrip) => {
    console.log(newTrip)
  }

  const handleNewCompany = (newCompany) => {
    console.log(newCompany)
  }

  return (
    <div>
      <Header />
      <br />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/schedule">
        <ScheduleTrip />
      </Route>
      <Route exact path="/create_trip">
        <CreateTrip handleAddTrip={handleAddTrip}/>
      </Route>
      <Route exact path="/add_company">
        <AddCompany handleNewCompany={handleNewCompany}/>
      </Route>
      {users.user.id === undefined && (
        <>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
        </>
       )}
    </div>
  );
}

export default App;
