import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice, { modeProps } from "./ModeSlice";
import FiltFrameSlice, { filtProps } from "./FiltFrameSlice";
import DevJobsSlice, { devProps } from "./DevJobsSlice";
import EveryJobSlice, { EveryProps } from "./EveryJobSlice";
import ListSlice, { listProps } from "./ListSlice";

const store = configureStore({
  reducer: {
    Mode: ThemeSlice,
    FiltFrame: FiltFrameSlice,
    DevJob: DevJobsSlice,
    EveryJob: EveryJobSlice,
    List: ListSlice,
  },
});

export type Mode = {
  Mode: modeProps;
  FiltFrame: filtProps;
  DevJob: devProps;
  EveryJob: EveryProps;
  List: listProps;
};

export default store;
