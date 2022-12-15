import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'states',
  initialState: {
    stateSelected: '',
    countySelected: '',
  },
  reducers: {
    changeState(state, { payload }) {
      return { ...state, stateSelected: payload };
    },
    changeCounty(state, { payload }) {
      return { ...state, countySelected: payload };
    },
  },
});

export const { changeState, changeCounty } = slice.actions;
export default slice.reducer;
