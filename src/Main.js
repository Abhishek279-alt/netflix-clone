import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Browse from "./pages/Browse";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </>
  );
};

export default Main;
