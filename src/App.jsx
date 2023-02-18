import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Iphone from "./components/apple/Iphone";
import Navbar from "./components/core/navbar/Navbar";
import Home from "./components/home/Home";

const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aple" elemen={<Iphone />} />
          < Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
