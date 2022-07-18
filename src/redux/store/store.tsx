import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import uiReducer from "../features/uiSlice";
import locationsReducer from "../features/locationsSlice";

const store = configureStore({
  reducer: { user: userReducer, ui: uiReducer, locations: locationsReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
