import React, { useState, useEffect, useCallback } from "react";
import {
  selectTargetWeight,
  setTargetWeight,
  selectAge,
  setAge,
  selectHeight,
  setHeight,
  selectCurrentWeight,
  setCurrentWeight,
  selectGender,
  setGender,
  selectExerciseHabit,
  setExerciseHabit,
  selectCalorie,
  setCalorie,
} from "../counterSlice";
import { useDispatch, useSelector } from "react-redux";

const GoalSettings = () => {
  const targetWeight = useSelector(selectTargetWeight);
  const age = useSelector(selectAge);
  const height = useSelector(selectHeight);
  const currentWeight = useSelector(selectCurrentWeight);
  const gender = useSelector(selectGender);
  const exerciseHabit = useSelector(selectExerciseHabit);
  const calorie = useSelector(selectCalorie);

  const dispatch = useDispatch();

  const onTargetWeightInput = (e) => {
    dispatch(setTargetWeight(e.target.value));
  };

  const onAgeInput = (e) => {
    dispatch(setAge(e.target.value));
  };

  const onHeightInput = (e) => {
    dispatch(setHeight(e.target.value));
  };

  const onCurrentWeightInput = (e) => {
    dispatch(setCurrentWeight(e.target.value));
  };

  const onGenderInput = (e) => {
    dispatch(setGender(e.target.value));
  };

  const onExerciseInput = (e) => {
    dispatch(setExerciseHabit(e.target.value));
  };

  //equation to get calorie per day
  const getCalorie = (e, age, gender, height, currentWeight, exerciseHabit) => {
    e.preventDefault();
    let calculatedCalorie;
    if (gender === "female") {
      calculatedCalorie =
        (655.1 + 9.563 * currentWeight + 1.85 * height - 4.676 * age) *
        exerciseHabit;
    }
    if (gender === "male") {
      calculatedCalorie =
        (66.5 + 13.75 * currentWeight + 5.003 * height - 6.75 * age) *
        exerciseHabit;
    }
    dispatch(setCalorie(calculatedCalorie));
  };

  return (
    <>
      <h2>Welcome to Diet Manager. Let's set your goal first!</h2>
      {/* form data submitted to backend */}

      <form>
        <label htmlFor="targetWeight">Your target weight (kg)</label>
        <br />
        <input
          id="targetWeight"
          name="targetWeight"
          type="number"
          placeholder="65"
          onInput={onTargetWeightInput}
        />
        <p>Let's calculate your daily calorie from your state</p>
        <label htmlFor="age">Age</label>
        <br />
        <input
          id="age"
          name="age"
          type="number"
          placeholder="50"
          onInput={onAgeInput}
        />
        <br />
        <label htmlFor="gender">Gender</label>
        <br />
        <select id="gender" name="gender" onInput={onGenderInput}>
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <label htmlFor="height">Height (cm)</label>
        <br />
        <input
          id="height"
          name="height"
          type="number"
          placeholder="180"
          onInput={onHeightInput}
        />
        <br />
        <label htmlFor="currentWeight">Current Weight (kg)</label>
        <br />
        <input
          id="currentWeight"
          name="currentWeight"
          type="number"
          placeholder="75"
          onInput={onCurrentWeightInput}
        />
        <br />
        <label htmlFor="exerciseHabit">Exercise Habit</label>
        <br />
        <select
          id="exerciseHabit"
          name="exerciseHabit"
          onInput={onExerciseInput}
        >
          <option value=""></option>
          <option value="1.2">Sedentary (little or no exercise)</option>
          <option value="1.375">
            Lightly active (light exercise/sports 1-3 days/week)
          </option>
          <option value="1.55">
            Moderately active (moderate exercise/sports 3-5 days/week)
          </option>
          <option value="1.725">
            Very active (hard exercise/sports 6-7 days a week)
          </option>
          <option value="1.9">
            very hard exercise/sports & a physical job
          </option>
        </select>
      </form>
      <button
        onClick={(e) =>
          getCalorie(e, age, gender, height, currentWeight, exerciseHabit)
        }
      >
        Get your daily Calorie!
      </button>
      <p>Your daily calorie is {Math.floor(calorie)}</p>
      <button>Register the result and start your diet</button>
    </>
  );
};

export default GoalSettings;
