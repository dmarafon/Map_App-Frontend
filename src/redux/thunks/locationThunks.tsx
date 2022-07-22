import axios from "axios";
import {
  checkStatusCode,
  errorLoginValidation,
  errorMapValidation,
} from "../../components/utils/errorValidation";
import { loadLocationActionCreator } from "../features/locationSlice";
import {
  apiResponseActionCreator,
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../features/uiSlice";
import { AppDispatch } from "../store/store";

export const loadLocationsThunk = () => async (dispatch: AppDispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}locations/marks`;

  dispatch(loadingActionCreator());

  try {
    const {
      data: { marks },
    } = await axios.get(url, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });

    if (marks) {
      dispatch(finishedLoadingActionCreator());
      return dispatch(loadLocationActionCreator(marks));
    } else {
      dispatch(finishedLoadingActionCreator());
      dispatch(apiResponseActionCreator("No Markers"));
    }
  } catch (error: any) {
    const errorResponse = errorMapValidation(error);
    dispatch(finishedLoadingActionCreator());
    dispatch(apiResponseActionCreator(errorResponse));
  }
};

export const deleteLocationThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());

      const url: string = `${process.env.REACT_APP_API_URL}locations/delete/${id}`;

      const { status } = await axios.delete(url, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      dispatch(finishedLoadingActionCreator());

      checkStatusCode(status, id);
    } catch (error: any) {
      const errorResponse = errorLoginValidation(error);
      dispatch(finishedLoadingActionCreator());
      dispatch(apiResponseActionCreator(errorResponse));
    }
  };
