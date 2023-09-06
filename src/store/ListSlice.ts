import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface listProps {
  list: number;
}

const initialState: listProps = {
  list: 1,
};

const ListSlice = createSlice({
  name: "ListSlice",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<number>) => {
      state.list = state.list + action.payload;
    },

    setListDefault: (state, action: PayloadAction<number>) => {
      state.list = action.payload;
    },
  },
});

export const { setList, setListDefault } = ListSlice.actions;
export default ListSlice.reducer;
