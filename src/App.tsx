import { Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/Welcome";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  );
};

export default App;
