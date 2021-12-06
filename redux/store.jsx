import { configureStore } from "@reduxjs/toolkit";
import launchesReducer from "./launchesSlice";

export default configureStore({
  reducer: {
    launches: launchesReducer,
  },
});
