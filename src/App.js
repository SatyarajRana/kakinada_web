import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import { Privacy, Contact, Faq, Terms, LandingPage } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="kakinada_web/" element={<LandingPage />} />
        <Route path="kakinada_web/contact" element={<Contact />} />
        <Route path="kakinada_web/privacy" element={<Privacy />} />
        <Route path="kakinada_web/terms" element={<Terms />} />
        <Route path="kakinada_web/faq" element={<Faq />} />
      </Routes>
    </>
  );
};
export default App;
