import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useHistory, Route } from "react-router-dom";
// import { fetchUser, addUser, deleteUser, logInUser} from './features/users/userSlice.js'
import { fetchUser } from '../features/users/userSlice.js'
import Home from "./Home.js";
import Header from "./Header.js";
import ScheduleTrip from "./ScheduleTrip.js";
import SignUp from "../forms/SignUp.js";
import LogIn from "../forms/LogIn.js";
import CreateTrip from '../forms/CreateTrip.js';
import AddCompany from '../forms/AddCompany.js';
import Blog from './Blog.js';
import ShowBlog from './ShowBlog.js';
// import NavBar from './components/NavBar.js';

function App() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch()
  const [blogs, setBlogs] = useState([])
  const [blogId, setBlogId] = useState(0)
  const [blogInfo, setBlogInfo] = useState([])
  const history = useHistory()
  // // console.log(!!user.user.errors)
  useEffect(() => {
    dispatch(fetchUser())
  },[dispatch])

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

  const handleShowBlog = (showBlog) => {
    if (users.user.id === undefined) {
      history.push("/login");
    } else {
      fetch(`blogs/${showBlog.id}`).then((resp) => {
        if (resp.ok) {
          resp.json().then((blog) => {
            setBlogInfo(blog);
            setBlogId(blog.id);
            history.push(`/blog/${blog.id}`);
          });
        } else {
          resp.json().then((err) => setBlogInfo(err));
        }
      })}
  }

  useEffect(() => {
    fetch("/blogs")
      .then((resp) => resp.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  const handleNewBlog = (showBlog) => {
    setBlogs([...blogs, showBlog])
  };

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
      <Route exact path="/blog">
        <Blog handleShowBlog={handleShowBlog} blogs={blogs} handleNewBlog={handleNewBlog}/>
      </Route>
      <Route exact path={`/blog/${blogId}`}>
        <ShowBlog blogInfo={blogInfo}/>
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
