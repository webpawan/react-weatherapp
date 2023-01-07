import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const TempData = createAsyncThunk(
  "TempSlice/TempData",
  async (search) => {
   
    try {
      const apikey = process.env.REACT_APP_MyAPI;
      let url = `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${search}&days=14&aqi=no&alerts=no`;

      const res = await axios(url);
    
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  ready: false,
  forcastData: [],
  setToggle :false
};
TempData();
const TempSlice = createSlice({
  name: "TempSlice",
  initialState,
  reducers: {
    toggle : (state) =>{

    },
  },
  extraReducers: {
    [TempData.pending]: (state) => {
      state.ready = false;
    },
    [TempData.fulfilled]: (state, action) => {
      state.ready = true;
      state.forcastData = [...action.payload.forecast.forecastday];
    },
    [TempData.rejected]: (state) => {
      state.ready = true;
    },
  },
});

export default TempSlice.reducer;
export const MyTempData = (state) => state.Temp.forcastData 
export const ready = (state) => state.Temp.ready
