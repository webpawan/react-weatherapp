import { configureStore } from "@reduxjs/toolkit";
import TempReducer from "../container/Features/TempSlice";

export const store = configureStore({
  reducer: {
    Temp: TempReducer,
  },
});
