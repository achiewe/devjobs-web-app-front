import { createSlice } from "@reduxjs/toolkit";

export interface filtProps {
  filter: boolean;
}

const initialState: filtProps = {
  filter: false,
};

const FiltFrameSlice = createSlice({
  name: "filtFrame",
  initialState,
  reducers: {
    openFrame: (state) => {
      state.filter = !state.filter;
    },
    CloseFrame: (state) => {
      state.filter = state.filter;
    },
  },
});

export const { openFrame, CloseFrame } = FiltFrameSlice.actions;
export default FiltFrameSlice.reducer;
