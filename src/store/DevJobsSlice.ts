import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Jobs from "../../type";

export interface devProps {
  job: Jobs[];
}

const initialState: devProps = {
  job: [],
};

const DevJobsSlice = createSlice({
  name: "DevJobs",
  initialState,
  reducers: {
    setJob: (state, action: PayloadAction<Jobs[]>) => {
      state.job = action.payload;
    },
  },
});

export const { setJob } = DevJobsSlice.actions;
export default DevJobsSlice.reducer;
