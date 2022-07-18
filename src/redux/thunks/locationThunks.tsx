import axios from "axios";
import { loadLocationActionCreator } from "../features/locationsSlice";
import { AppDispatch } from "../store/store";

export const loadLocationsThunk = () => async (dispatch: AppDispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}locations/marks`;
  try {
    const {
      data: { marks },
    } = await axios.get(url, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });

    console.log(marks);
    debugger;
    if (marks) {
      return dispatch(loadLocationActionCreator(marks));
    }
  } catch (error) {
    debugger;

    console.log("Request doesn't work");
  }
};
