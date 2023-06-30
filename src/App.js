import React from "react";
import GoalSettings from "./features/counter/components/GoalSettings";
import Home from "./features/counter/components/Home";

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
      <Home />
    </>
  );
};

export default App;
