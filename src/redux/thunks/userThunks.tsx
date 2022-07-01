import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  errorLoginValidation,
  errorRegistrationValidation,
} from "../../components/utils/errorValidation";
import {
  LoginInformation,
  RegisterInformation,
} from "../../types/userInterface";
import {
  apiResponseActionCreator,
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../features/uiSlice";

import { loginActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const loginUserThunk =
  (loginInformation: LoginInformation) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const route = `${process.env.REACT_APP_API_URL}users/login`;
      const {
        data: { token },
      } = await axios.post(route, loginInformation);

      localStorage.setItem("token", token);

      const userInfo = jwtDecode(token);

      dispatch(loginActionCreator(userInfo));
      dispatch(finishedLoadingActionCreator());
    } catch (error: any) {
      const errorResponse = errorLoginValidation(error);
      dispatch(finishedLoadingActionCreator());
      dispatch(apiResponseActionCreator(errorResponse));
    }
  };

export const registerUserThunk =
  (registerInformation: RegisterInformation) =>
  async (dispatch: AppDispatch) => {
    const route = `${process.env.REACT_APP_API_URL}users/register`;
    try {
      dispatch(loadingActionCreator());
      await axios.post(route, registerInformation).then((response) => {
        const apiResponse = response.request.response.substring(2, 5);

        dispatch(apiResponseActionCreator(apiResponse.toString()));
      });

      dispatch(finishedLoadingActionCreator());
    } catch (error: any) {
      const errorResponse = errorRegistrationValidation(error);

      dispatch(apiResponseActionCreator(errorResponse));
      dispatch(finishedLoadingActionCreator());
    }
  };
