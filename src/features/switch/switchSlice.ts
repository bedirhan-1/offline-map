import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SwitchState {
  whichSwitch: string;
}

const intialState: SwitchState = {
  whichSwitch: "Offline_World_Map",
};

export const switchSlice = createSlice({
  name: "switch",
  initialState: intialState,
  reducers: {
    switchStateChange: (state, action: PayloadAction<string>) => {
      state.whichSwitch = action.payload;
      return state;
    },
  },
});

export const { switchStateChange } = switchSlice.actions;
export default switchSlice.reducer;
