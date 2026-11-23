import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Robobots from "./pages/Robobots";
import Drones from "./pages/Drones";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/robobots" element={<Robobots />} />
        <Route path="/drones" element={<Drones />} />
      </Routes>
    </>
  );
}
export default App;
