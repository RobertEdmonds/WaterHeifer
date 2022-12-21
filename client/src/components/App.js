import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useHistory, Route } from "react-router-dom";
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
import Gallery from "./Gallery.js";
import CustomerList from "./CustomerList.js";

function App() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();
  // Blogs
  const [blogs, setBlogs] = useState([]);
  // const [blogId, setBlogId] = useState(null);
  const [blogInfo, setBlogInfo] = useState({});
  // const { id } = useParams()
  // Company and Donations
  const [company, setCompany] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [tax, setTax] = useState("");
  const [companyDescript, setCompanyDescript] = useState("");
  const [companyId, setCompanyId] = useState(0);
  const [companyEdit, setCompanyEdit] = useState(false);
  // Trips and Schedule Trips
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
  const [month, setMonth] = useState("All");
  // Gallery
  const [pictures, setPictures] = useState([]);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  // This is Show, Add, Edit and Delete for Schedule Trips
  useEffect(() => {
    fetch("/api/trips")
      .then((r) => r.json())
      .then((trip) => setTrips(trip));
  }, []);

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

  const filterTrips = trips.filter((trip) => {
    const start = new Date(trip.start_time);
    if (month === "All") return true;
    return parseInt(month) === (start.getMonth() + 1);
  });
  // This is Show, Add, Edit and Delete for Companies and donation
  useEffect(() => {
    fetch("/api/companies")
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

  // This is Show, Add, Edit and Delete for Blog

  const handleShowBlog = (showBlog) => {
    if (!users.user) {
      history.push("/login");
    } else {
      history.push(`/blogs/${showBlog.id}`)
    }
  };

  useEffect(() => {
    fetch("/api/blogs")
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
  // This is show and add for Gallery
  useEffect(() => {
    fetch("/api/pictures")
      .then((resp) => resp.json())
      .then((images) => setPictures(images));
  }, []);

  const handleAddImage = (newImage) => {
    setPictures([...pictures, newImage]);
  };

  return (
    <div className="wholeApp">
      <Header />
      <br />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/gallery">
        <Gallery pictures={pictures} handleAddImage={handleAddImage} />
      </Route>
      <Route exact path="/schedules">
        <ScheduleTrip
          trips={filterTrips}
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
          month={month}
          setMonth={setMonth}
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
      <Route exact path="/blogs">
        <Blog
          handleShowBlog={handleShowBlog}
          blogs={blogs}
          handleNewBlog={handleNewBlog}
          handleEditBlog={handleEditBlog}
          showBlogDelete={showBlogDelete}
        />
      </Route>
      {users.user && (
        <>
          <Route path={`/blogs/:id`}>
            <ShowBlog blogInfo={blogInfo} setBlogInfo={setBlogInfo} blogs={blogs}/>
          </Route>
          <Route exact path="/profile">
            <ProfileForm />
          </Route>
        </>
      )}
      {users.user && users.user.employee && (
        <>
          <Route exact path="/add_trips">
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
              setTripEdit={setTripEdit}
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
          <Route exact path="/customers">
            <CustomerList />
          </Route>
        </>
      )}
      <>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
      </>
    </div>
  );
}

export default App;
