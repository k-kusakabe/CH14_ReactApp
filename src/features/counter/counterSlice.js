import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

const initialState = { breakfast: 0, breakfastModal: false };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setTargetWeight: (state, action) => {
      state.targetWeight = action.payload;
    },

    setAge: (state, action) => {
      state.age = action.payload;
    },

    setGender: (state, action) => {
      state.gender = action.payload;
    },

    setHeight: (state, action) => {
      state.height = action.payload;
    },

    setCurrentWeight: (state, action) => {
      state.currentWeight = action.payload;
    },

    setExerciseHabit: (state, action) => {
      state.exerciseHabit = action.payload;
    },

    setCalorie: (state, action) => {
      state.calorie += action.payload;
    },

    setBreakfast: (state, action) => {
      state.breakfast += action.payload;
    },

    setBreakfastValue: (state, action) => {
      state.breakfastValue = action.payload;
    },

    setFoodName: (state, action) => {
      state.foodName = action.payload;
    },

    setApiData: (state, action) => {
      state.apiData = action.payload;
    },
    setBreakfastModal: (state, action) => {
      state.breakfastModal = action.payload;
    },
  },
});

export const {
  setTargetWeight,
  setAge,
  setHeight,
  setCurrentWeight,
  setGender,
  setExerciseHabit,
  setCalorie,
  setBreakfast,
  setBreakfastValue,
  setFoodName,
  setApiData,
  setBreakfastModal,
} = counterSlice.actions;

export const selectTargetWeight = (state) => state.counter.targetWeight;
export const selectAge = (state) => state.counter.age;
export const selectGender = (state) => state.counter.gender;
export const selectHeight = (state) => state.counter.height;
export const selectCurrentWeight = (state) => state.counter.currentWeight;
export const selectExerciseHabit = (state) => state.counter.exerciseHabit;
export const selectCalorie = (state) => state.counter.calorie;
export const selectBreakfast = (state) => state.counter.breakfast;
export const selectBreakfastValue = (state) => state.counter.breakfastValue;
export const selectFoodName = (state) => state.counter.foodName;
export const selectApiData = (state) => state.counter.apiData;
export const selectBreakfastModal = (state) => state.counter.breakfastModal;

export default counterSlice.reducer;
