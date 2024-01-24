import React from "react";

import Home from "./sections/Home";
import Destination from "./sections/Destination";
import Crew from "./sections/Crew";
import Nav from "./Nav";
import Technology from "./sections/Technology";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        <h1>APP </h1>
      </div>
    </Router>
  );
}

export default App;
