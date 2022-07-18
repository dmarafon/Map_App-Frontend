import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./components/hooks";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import {
  loginActionCreator,
  logoutActionCreator,
} from "./redux/features/userSlice";
import { LoginInformation } from "./types/userInterface";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const token = useAppSelector((store) => store.user.logged);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userInfo: LoginInformation = jwtDecode(token);
      dispatch(loginActionCreator(userInfo));
    } else {
      dispatch(logoutActionCreator());
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <Navigate to="/map" /> : <Navigate to="/welcome" />}
      />
      <Route
        path="/welcome"
        element={token ? <Navigate to="/map" /> : <WelcomePage />}
      />
    </Routes>
  );
};

export default App;
