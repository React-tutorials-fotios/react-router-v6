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
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to={"/learn"} />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />} />
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
  return (
    <div>
      <h1>Courses list</h1>
      <h4>Course card</h4>
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

reportWebVitals();
