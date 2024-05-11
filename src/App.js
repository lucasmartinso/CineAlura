import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./styles/globalStyles";


export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<InitialScreen />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}
