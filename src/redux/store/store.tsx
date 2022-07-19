import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import uiReducer from "../features/uiSlice";
import locationReducer from "../features/locationSlice";

const store = configureStore({
  reducer: { user: userReducer, ui: uiReducer, location: locationReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
