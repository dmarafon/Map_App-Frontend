import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliceState {
  id: string;
  firstName: string;
  email: string;
  city: string;
  country: string;
  logged: boolean;
}

const initialState = {
  id: "",
  firstName: "",
  email: "",
  city: "",
  country: "",
  logged: false,
} as SliceState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user: SliceState, action: PayloadAction<any>) => ({
      ...action.payload,
      logged: true,
    }),
    logout: () => ({
      id: "",
      firstName: "",
      email: "",
      city: "",
      country: "",
      logged: false,
    }),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
