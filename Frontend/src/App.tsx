import React from "react";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

import Home from "./components/Home";
import Evento from "./components/Evento";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registrar" element={<RegisterPage />} />
          <Route path="/eventos" element={<Evento />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
