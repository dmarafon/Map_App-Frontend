import axios from "axios";
import { errorMapValidation } from "../../components/utils/errorValidation";
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
    }
  } catch (error: any) {
    const errorResponse = errorMapValidation(error);
    dispatch(finishedLoadingActionCreator());
    dispatch(apiResponseActionCreator(errorResponse));
  }
};
