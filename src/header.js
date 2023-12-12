import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from './App.js';
import Birds from './Birds.js';
import Aboutus from './Aboutus.js';
import JsonValMain from './JsonValidator/JsonValMain.js'
import JsonValidatorForm from "./Test.js";
import JsonValidator1 from "./NotiCheck.js";
import Notification from "./Notification.js";
export const Header = () => {
  return (
    <>
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Birds">Birds</Link></li>
          <li><Link to="/Aboutus">Aboutus</Link></li>
          <li><Link to="/JsonValidator">JsonVal</Link></li>
          <li><Link to="/JsonValidatorApp">JsonVal Test</Link></li>
          <li><Link to="/JsonValidatorNotify">JsonVal Notify</Link></li>
          <li><Link to="/Notification">Notification</Link></li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Birds" element={<Birds />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/JsonValidator" element={<JsonValMain />} />
        <Route path="/JsonValidatorApp" element={<JsonValidatorForm />} />
        <Route path="/JsonValidatorNotify" element={<JsonValidator1 />} />
        <Route path="/Notification" element={<Notification />} />
      </Routes>
    </>
  );
};
