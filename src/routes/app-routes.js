import { Route, Routes } from "react-router-dom";
import Display from "../pages/display";
import Home from "../pages/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/display" element={<Display />}></Route>
    </Routes>
  );
};

export default AppRoutes;
