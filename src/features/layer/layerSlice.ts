import { ILayer } from "./../../Interfaces/Layer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { layer } from "../../Interfaces/opacity";

const initialState = layer;

const layerSlice = createSlice({
  name: "layer",
  initialState,
  reducers: {
    updateOfflineWorldMap: (state, action: PayloadAction<ILayer>) => {
      return {
        ...state,
        Offline_World_Map: action.payload,
      };
    },

    updateDefaultOfflineMap: (state, action: PayloadAction<ILayer>) => {
      return {
        ...state,
        Default_Offline_Map: action.payload,
      };
    },
  },
});

export const { updateOfflineWorldMap, updateDefaultOfflineMap } =
  layerSlice.actions;

export default layerSlice;
