import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
  // Navigate,
} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignEmail from "./pages/SignEmail";
import Login from "./pages/Login";
import Selection from "./pages/Selection";
import ConfirmMail from "./pages/ConfirmMail";
import EnterLinks from "./pages/EnterLinks";
import EditProfile from "./pages/EditProfile";
import HomeLink from "./pages/HomeLink";
import HomeEvents from "./pages/HomeEvents";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/email" element={<SignEmail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/confirmmail" element={<ConfirmMail />} />
          <Route path="/enterlinks" element={<EnterLinks />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/homelink" element={<HomeLink />} />
          <Route path="/homeevents" element={<HomeEvents />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
