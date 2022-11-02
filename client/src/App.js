import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchUser, addUser, deleteUser, logInUser} from './features/users/userSlice.js'

function App() {
  const user = useSelector(store => store.users)
  const dispatch = useDispatch()
  // console.log(!!user.user.errors)
  console.log(user)
  useEffect(() => {
    dispatch(fetchUser())
  },[dispatch])
  const handleDispatch = () => {
    const form = {
      name: "Jeff",
      email: "Jeff@gmail.com",
      password: "Hello",
      password_confirmation: "Hello",
      phone_number: parseInt("1234567892"),
    }
    dispatch(addUser(form))
  }

  const handleLogin = () => {
    const form = {
      email: "Jeff@gmail.com",
      password: "Hello"
    }
    dispatch(logInUser(form))
  }

  const handleDeleteDispatch = () =>{
    dispatch(deleteUser())
  }

  const makeTrip = () => {
    const form = {
      title: "fishing",
      description: "Poles and things",
      start_time: "2003-09-23 12:42:06",
      end_time: "2003-09-23 12:48:06",
      location: "Denver",
      spots: 5,
      cost_per_person: 35
    }
    fetch("/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
    .then(r => r.json())
    .then(trip => console.log(trip))
  }
  const displayTrips = () => {
    fetch("/trips")
    .then(r => r.json())
    .then(trip => console.log(trip))
  }

  const addTrip = () => {
    const form = {
      trip_id: 1,
      amount: 70,
      spaces: 2,
      // attendees: 
    }
    fetch("/user_trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
    .then(r => r.json())
    .then(trip => console.log(trip))
  }
  return (
    <div >
      {/* {user.length > 0 && user.map(u => <p key={u.name}>{u.name}</p>)} */}
      <button onClick={handleDispatch}>hello</button>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleDeleteDispatch}>bye</button>
      <button onClick={makeTrip}>Add Trip</button>
      <button onClick={displayTrips}>trips</button>
      <button onClick={addTrip}>sign up for trip</button>
    </div>
  );
}

export default App;

