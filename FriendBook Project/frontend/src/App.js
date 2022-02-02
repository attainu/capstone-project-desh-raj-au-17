import Home from "./pages/home/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Person } from "@material-ui/icons";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/profile/:username" element={<Profile />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
