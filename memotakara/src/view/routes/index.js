import "../../main.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../../components/main_layout";
import SignUp from "../pages/sign_up";
import Login from "../pages/login";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/sign_up" element={<MainLayout component={<SignUp />} />} />
      <Route path="/login" element={<MainLayout component={<Login />} />} />
    </Routes>
  );
}

export default AllRoutes;
