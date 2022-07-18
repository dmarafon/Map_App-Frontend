import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationData } from "../../types/locationInterface";

const initialState: LocationData[] = [];

const locationsSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    loadLocation: (location, action: PayloadAction<LocationData[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadLocation: loadLocationActionCreator } =
  locationsSlice.actions;

export default locationsSlice.reducer;
