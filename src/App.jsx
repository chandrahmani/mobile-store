import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apple from "./components/apple/Apple";
import Navbar from "./components/core/navbar/Navbar";

const App = () => {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Apple />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
