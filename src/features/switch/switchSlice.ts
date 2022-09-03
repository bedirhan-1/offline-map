import { createSlice } from "@reduxjs/toolkit";

export interface SwitchState {
  isOn: boolean;
}

const intialState: SwitchState = {
  isOn: false,
};

export const switchSlice = createSlice({
  name: "switch",
  initialState: intialState,
  reducers: {
    switchStateChange: (state) => {
      state.isOn = !state.isOn;
    },
  },
});

export const { switchStateChange } = switchSlice.actions;

export default switchSlice.reducer;
