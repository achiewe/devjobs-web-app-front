import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Jobs from "../../type";

export interface EveryProps {
  everyJob: Jobs[];
}

const initialState: EveryProps = {
  everyJob: [],
};

const EveryJobSlice = createSlice({
  name: "everyJobs",
  initialState,
  reducers: {
    setEveryJob: (state, action: PayloadAction<Jobs[]>) => {
      state.everyJob = action.payload;
    },
  },
});

export const { setEveryJob } = EveryJobSlice.actions;
export default EveryJobSlice.reducer;
