import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Prs } from "./screens/Prs";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Prs" element={<Prs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
