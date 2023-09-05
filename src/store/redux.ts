import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice, { modeProps } from "./ModeSlice";
import FiltFrameSlice, { filtProps } from "./FiltFrameSlice";
import DevJobsSlice, { devProps } from "./DevJobsSlice";
import EveryJobSlice, { EveryProps } from "./EveryJobSlice";

const store = configureStore({
  reducer: {
    Mode: ThemeSlice,
    FiltFrame: FiltFrameSlice,
    DevJob: DevJobsSlice,
    EveryJob: EveryJobSlice,
  },
});

export type Mode = {
  Mode: modeProps;
  FiltFrame: filtProps;
  DevJob: devProps;
  EveryJob: EveryProps;
};

export default store;
