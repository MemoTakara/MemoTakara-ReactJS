import "../../main.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../../components/main_layout";
import LandingPage from "../pages/landing_page";
import SignUp from "../pages/sign_up";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Statistics from "../pages/statistics";
import Settings from "../pages/settings";
import StudySets from "../pages/study_sets";
import CreateCollection from "../pages/create_collection";
import StudyDetail from "../pages/study_detail";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout component={<LandingPage />} />} />
      <Route path="/sign_up" element={<MainLayout component={<SignUp />} />} />
      <Route path="/login" element={<MainLayout component={<Login />} />} />
      <Route
        path="/dashboard"
        element={<MainLayout component={<Dashboard />} />}
      />
      <Route
        path="/statistics"
        element={<MainLayout component={<Statistics />} />}
      />
      <Route
        path="/settings"
        element={<MainLayout component={<Settings />} />}
      />
      <Route
        path="/study_sets"
        element={<MainLayout component={<StudySets />} />}
      />
      <Route
        path="/create_collection"
        element={<MainLayout component={<CreateCollection />} />}
      />
      <Route
        path="/study_detail"
        element={<MainLayout component={<StudyDetail />} />}
      />
    </Routes>
  );
}

export default AllRoutes;
