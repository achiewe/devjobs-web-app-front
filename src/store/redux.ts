import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice, { modeProps } from "./ModeSlice";
import FiltFrameSlice, { filtProps } from "./FiltFrameSlice";

const store = configureStore({
  reducer: {
    Mode: ThemeSlice,
    FiltFrame: FiltFrameSlice,
  },
});

export type Mode = {
  Mode: modeProps;
  FiltFrame: filtProps;
};

export default store;
