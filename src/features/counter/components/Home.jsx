import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  return (
    <>
      <h1>Home</h1>
      <div className="weightContainer">
        {/* get registered data from backend. All of the following numbers are hardcoded provisionally */}
        <div>
          <p>Your Current Weight</p>
          <p>65 kg</p>
        </div>
        <div>
          <p>Your Target Weight</p>
          <p>60 kg</p>
        </div>
      </div>
      <div className="dailyStats">
        <div>
          <p>{formattedDate}</p>
        </div>
        <div>
          <p>Your Daily Calorie</p>
          <p>2,500 kcal</p>
        </div>
        <div>
          <p>Today's Calorie</p>
          {/* Will add graph to visualise total calorie taken so far vs the defined daily calorie */}
          <p>2,500 kcal</p>
        </div>
        <button>
          <Link to="/interface">Add Calories</Link>
        </button>
      </div>
      <button>Submit Today's Entry</button>
    </>
  );
};

export default Home;
