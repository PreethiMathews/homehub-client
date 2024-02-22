import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./pages/SignIn";
import CreateListing from "./pages/CreateListing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
