import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Cartabl from "./Cartabl";

function App() {
  return (
    <BrowserRouter>
      <Cartabl />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
