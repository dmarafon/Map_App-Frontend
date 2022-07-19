import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationData } from "../../types/locationInterface";

const initialState: LocationData[] = [];

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    loadLocation: (location, action: PayloadAction<LocationData[]>) => [
      ...action.payload,
    ],
  },
});

export const { loadLocation: loadLocationActionCreator } =
  locationSlice.actions;

export default locationSlice.reducer;
