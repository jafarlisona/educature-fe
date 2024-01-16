import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import AddPage from "./pages/AddPage/AddPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/addPage" element={<AddPage />} />
        </Route>
      </Routes>
      {/* 2;48;33 */}
    </BrowserRouter>
  );
}

export default App;
