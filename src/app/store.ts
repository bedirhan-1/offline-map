import { configureStore } from "@reduxjs/toolkit";
import layerSlice from "../features/layer/layerSlice";
import switchReducer from "../features/switch/switchSlice";

export const store = configureStore({
  reducer: {
    switch: switchReducer,
    layer: layerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
