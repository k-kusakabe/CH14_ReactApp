import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBreakfast,
  setBreakfast,
  selectBreakfastValue,
  setBreakfastValue,
  selectFoodName,
  setFoodName,
  selectApiData,
  setApiData,
  selectBreakfastModal,
  setBreakfastModal,
} from "../counterSlice";
import "../../../App.css";
import axios from "axios";

const Interface = () => {
  const dispatch = useDispatch();

  const breakfast = useSelector(selectBreakfast);
  const breakfastValue = useSelector(selectBreakfastValue);
  const foodName = useSelector(selectFoodName);
  const apiData = useSelector(selectApiData);
  const breakfastModal = useSelector(selectBreakfastModal);

  // open modal for breakfast entry
  const openBreakfastModal = () => {
    dispatch(setBreakfastModal(true));
  };

  //close modal for breakfast entry
  const closeBreakfastModal = () => {
    dispatch(setBreakfastModal(false));
  };

  // read calorie entered in the input box in the modal
  const onCalorieInput = (e) => {
    dispatch(setBreakfastValue(e.target.value));
  };

  // read and dispatch food name to store to get calorie data
  const onFoodNameInput = (e) => {
    dispatch(setFoodName(e.target.value));
  };

  // send breakfast calorie info to the store. May be sent to the backend, not store, once it's been setup.
  const onSetBreakfast = (e) => {
    e.preventDefault();
    dispatch(setBreakfast(Number(breakfastValue)));
  };

  // get calorie data from API
  const getCalorieData = async () => {
    const query = foodName;

    try {
      const { data } = await axios.get(
        "https://api.calorieninjas.com/v1/nutrition",
        {
          params: { query },
          headers: { "X-Api-Key": "MueDKarRT+AISQaCbGOwlg==xqFFmOJKIeBIpF1u" },
        }
      );

      dispatch(setApiData(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Food and Drink</h1>
      <div>
        <h2>Today's Calorie</h2>
        {/* this is the calorie meter */}
        <p>2,500 kcal</p>
      </div>
      <div>
        <h2>Breakfast</h2>
        <h3>{breakfast} kcal</h3>
        <button onClick={openBreakfastModal}>Add an item</button>
      </div>
      {/* breakfast modal */}
      {breakfastModal && (
        <div className="breakfastModal">
          <h2>Add Item</h2>
          <input
            onInput={onFoodNameInput}
            type="text"
            placeholder="100g bread, 100g milk"
          />
          <br />
          <button onClick={getCalorieData}>Get Calorie!</button>
          {/* render API data in DOM */}
          {apiData &&
            apiData.items.map((item, index) => {
              return (
                <div key={index}>
                  <p>Name: {item.name}</p>
                  <p>Calorie: {item.calories} kcal</p>
                  <p>Serving Size: {item.serving_size_g} g</p>
                </div>
              );
            })}
          <form>
            <input onInput={onCalorieInput} type="text" placeholder="300" />
            <br />
            <button onClick={(closeBreakfastModal, onSetBreakfast)}>Add</button>
          </form>
        </div>
      )}

      <div>
        <h2>Lunch</h2>
        <h3>kcal</h3>
        <button>Add an item</button>
      </div>
      <div>
        <h2>Dinner</h2>
        <h3>kcal</h3>
        <button>Add an item</button>
      </div>
      <div>
        <h2>Other (snacks, etc.)</h2>
        <h3>kcal</h3>
        <button>Add an item</button>
      </div>
    </>
  );
};

export default Interface;
