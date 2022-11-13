import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useHistory, Route } from "react-router-dom";
// import { fetchUser, addUser, deleteUser, logInUser} from './features/users/userSlice.js'
import { fetchUser } from "../features/users/userSlice.js";
import dayjs from "dayjs";
import Home from "./Home.js";
import Header from "./Header.js";
import ScheduleTrip from "./ScheduleTrip.js";
import SignUp from "../forms/SignUp.js";
import LogIn from "../forms/LogIn.js";
import CreateTrip from "../forms/CreateTrip.js";
import AddCompany from "../forms/AddCompany.js";
import Blog from "./Blog.js";
import ShowBlog from "./ShowBlog.js";
import Donate from "./Donate.js";
import ProfileForm from "../forms/ProfileForm.js";

function App() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);
  const [blogId, setBlogId] = useState(0);
  const [blogInfo, setBlogInfo] = useState({});
  const [company, setCompany] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [tax, setTax] = useState("");
  const [companyDescript, setCompanyDescript] = useState("");
  const [companyId, setCompanyId] = useState(0);
  const [companyEdit, setCompanyEdit] = useState(false);
  const [trips, setTrips] = useState([]);
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [tripDescription, setTripDescription] = useState("");
  const [start, setStart] = useState(
    dayjs("Tue Nov 08 2022 00:00:00 GMT-0500 (Eastern Standard Time)")
  );
  const [end, setEnd] = useState(
    dayjs("Tue Nov 08 2022 00:00:00 GMT-0500 (Eastern Standard Time)")
  );
  const [spots, setSpots] = useState("");
  const [cost, setCost] = useState("");
  const [tripId, setTripId] = useState(0);
  const [tripEdit, setTripEdit] = useState(false);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    fetch("/trips")
      .then((r) => r.json())
      .then((trip) => setTrips(trip));
  }, []);

  // const deleteTrip = () => {
  //   fetch("/user_trips/7", {
  //     method: "DELETE"
  //   })
  // }
  const handleAddTrip = (newTrip) => {
    setTrips([...trips, newTrip]);
  };

  const handleUpdateTrip = (edited) => {
    const updatedItem = trips.map((trip) => {
      if (trip.id === edited.id) {
        return edited;
      } else {
        return trip;
      }
    });
    setTrips(updatedItem);
  };

  const removeTrip = (id) => {
    const updatedItem = trips.filter((trip) => trip.id !== id);
    setTrips(updatedItem);
  };

  useEffect(() => {
    fetch("/companies")
      .then((resp) => resp.json())
      .then((comp) => setCompany(comp));
  }, []);

  const handleUpdateCompany = (edited) => {
    const updatedItem = company.map((comp) => {
      if (comp.id === edited.id) {
        return edited;
      } else {
        return comp;
      }
    });
    setCompany(updatedItem);
  };

  const handleNewCompany = (newCompany) => {
    setCompany([...company, newCompany]);
  };

  const removeCompany = (id) => {
    const updatedItem = company.filter((store) => store.id !== id);
    setCompany(updatedItem);
  };

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
      });
    }
  };

  useEffect(() => {
    fetch("/blogs")
      .then((resp) => resp.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  const handleNewBlog = (showBlog) => {
    setBlogs([...blogs, showBlog]);
  };

  const handleEditBlog = (editBlog) => {
    const updatedItem = blogs.map((blog) => {
      if (blog.id === editBlog.id) {
        return editBlog;
      } else {
        return blog;
      }
    });
    setBlogs(updatedItem);
  };

  const showBlogDelete = (id) => {
    const updatedItem = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedItem);
  };

  return (
    <div>
      <Header />
      <br />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/schedule">
        <ScheduleTrip
          trips={trips}
          setTitle={setTitle}
          setLocation={setLocation}
          setTripDescription={setTripDescription}
          setSpots={setSpots}
          setCost={setCost}
          setStart={setStart}
          setEnd={setEnd}
          setTripId={setTripId}
          setTripEdit={setTripEdit}
          removeTrip={removeTrip}
        />
      </Route>
      <Route exact path="/donate">
        <Donate
          companies={company}
          setCompanyName={setCompanyName}
          setTax={setTax}
          setCompanyDescript={setCompanyDescript}
          setCompanyId={setCompanyId}
          setCompanyEdit={setCompanyEdit}
          removeCompany={removeCompany}
        />
      </Route>
      <Route exact path="/blog">
        <Blog
          handleShowBlog={handleShowBlog}
          blogs={blogs}
          handleNewBlog={handleNewBlog}
          handleEditBlog={handleEditBlog}
          showBlogDelete={showBlogDelete}
        />
      </Route>
      {users.user.id > 0 && (
        <>
          <Route exact path={`/blog/${blogId}`}>
            <ShowBlog blogInfo={blogInfo} />
          </Route>
          <Route exact path="/profile">
            <ProfileForm />
          </Route>
        </>
      )}
      {users.user.employee && (
        <>
          <Route exact path="/create_trip">
            <CreateTrip
              handleAddTrip={handleAddTrip}
              title={title}
              setTitle={setTitle}
              cost={cost}
              setCost={setCost}
              tripDescription={tripDescription}
              setTripDescription={setTripDescription}
              setStart={setStart}
              start={start}
              setEnd={setEnd}
              end={end}
              location={location}
              setLocation={setLocation}
              spots={spots}
              setSpots={setSpots}
              setTripId={setTripId}
              tripId={tripId}
              setCompanyEdit={setTripEdit}
              tripEdit={tripEdit}
              handleUpdateTrip={handleUpdateTrip}
            />
          </Route>
          <Route exact path="/add_company">
            <AddCompany
              handleNewCompany={handleNewCompany}
              companyName={companyName}
              setCompanyName={setCompanyName}
              tax={tax}
              setTax={setTax}
              companyDescript={companyDescript}
              setCompanyDescript={setCompanyDescript}
              setCompanyId={setCompanyId}
              companyId={companyId}
              setCompanyEdit={setCompanyEdit}
              companyEdit={companyEdit}
              handleUpdateCompany={handleUpdateCompany}
            />
          </Route>
        </>
      )}
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
