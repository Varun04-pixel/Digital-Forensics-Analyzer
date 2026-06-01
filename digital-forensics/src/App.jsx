import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact.jsx";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

  );
}