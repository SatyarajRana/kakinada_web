import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import { Privacy, Contact, Faq, Terms, LandingPage } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="kakinada_web/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
};
export default App;
