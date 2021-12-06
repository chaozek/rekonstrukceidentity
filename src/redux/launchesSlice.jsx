import { GET_DATA_QUERY, URL_API } from "../constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getLaunches = createAsyncThunk(
  "launches/getLaunches",
  async () => {
    try {
      const queryResult = await axios.post(URL_API, {
        query: GET_DATA_QUERY,
      });
      const result = queryResult.data.data.launchesPast;
      return result;
    } catch (error) {
      return error;
    }
  }
);

const launchesSlice = createSlice({
  name: "launches",
  initialState: {
    launches: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getLaunches.pending]: (state) => {
      state.status = "loading";
    },
    [getLaunches.fulfilled]: (state, action) => {
      state.launches = action.payload;
      state.status = "success";
    },
    [getLaunches.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export const {} = launchesSlice.actions;

export default launchesSlice.reducer;
