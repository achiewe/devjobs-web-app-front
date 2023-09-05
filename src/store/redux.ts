import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice, { modeProps } from "./ModeSlice";
import FiltFrameSlice, { filtProps } from "./FiltFrameSlice";
import DevJobsSlice, { devProps } from "./DevJobsSlice";

const store = configureStore({
  reducer: {
    Mode: ThemeSlice,
    FiltFrame: FiltFrameSlice,
    DevJob: DevJobsSlice,
  },
});

export type Mode = {
  Mode: modeProps;
  FiltFrame: filtProps;
  DevJob: devProps;
};

export default store;
