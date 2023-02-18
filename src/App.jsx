import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/core/navbar/Navbar";

const App = () => {


  return (
    <div className="App">
      <h1>Mobile Store</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
