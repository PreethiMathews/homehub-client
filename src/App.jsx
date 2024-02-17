import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";

import SignIn from "./pages/SignIn";

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
        <Route path="/profile" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
