import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to={"/learn"} />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseID" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />} />
      </Route>
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>Home route</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link className="btn btn-success" to="/learn/courses">
        courses
      </Link>
      <br />
      <br />
      <br />
      <Link className="btn btn-primary" to="/learn/bundles">
        bundle
      </Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = ["React", "Angular", "Vue", "Nodejs"];
  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses list</h1>
      <h4>Course card</h4>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quam,
        repellendus delectus soluta provident sed ea. Possimus recusandae maxime
        consequatur, quaerat animi autem reprehenderit ipsa quod mollitia quam
        explicabo minima!
      </p>

      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "red" : "yellow",
          };
        }}
        to={`/learn/courses/${randomCourseName}`}>
        {randomCourseName}
      </NavLink>
      <br />
      <br />
      <NavLink className="btn btn-light" to={`/learn/courses/tests`}>
        tests
      </NavLink>

      <Outlet />
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundles list</h1>
      <h4>Bundle card</h4>
    </div>
  );
}

function CourseId() {
  const { courseID } = useParams();
  return (
    <div>
      <h1>URL params is: {courseID}</h1>
    </div>
  );
}

reportWebVitals();
