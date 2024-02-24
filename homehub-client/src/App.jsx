import React from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./pages/SignIn";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/update-listing/:listingId" element={<UpdateListing />} />
        </Route>
        <Route path="/listing/:listingId" element={<Listing />} />

        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
