import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from './App.js';
import Birds from './Birds.js';
import Aboutus from './Aboutus.js';
export const Header = () => {
  return (
    <>
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Birds">Birds</Link></li>
          <li><Link to="Aboutus">Aboutus</Link></li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Birds" element={<Birds />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </>
  );
};
