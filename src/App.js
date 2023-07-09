import React from "react";
import GoalSettings from "./features/counter/components/GoalSettings";
import Home from "./features/counter/components/Home";
import Report from "./features/counter/components/Report";
import { Routes, Route, Link } from "react-router-dom";
import Interface from "./features/counter/components/Interface";
import "./App.css";

const App = () => {
  // This is temporary code to manage and test page transition. Will be replaced once backend has been setup.
  // Goal settings page rendered only for the first time. Once the necessary data has been registered, Home components directly rendered.
  const calorie = localStorage.getItem("calorie");

  if (!calorie) {
    return <GoalSettings />;
  }

  //temporary code end

  return (
    <>
      <h1>Diet Manager</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/goalsettings">Goal</Link>
        <Link to="/report">Report</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goalsettings" element={<GoalSettings />} />
        <Route path="/report" element={<Report />} />
        <Route path="/interface" element={<Interface />} />
      </Routes>
    </>
  );
};

export default App;
