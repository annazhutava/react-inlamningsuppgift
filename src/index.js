import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./routes/Books";
import Book from "./routes/Book";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Books" element={<Books />} />
      <Route path="/Books/:title" element={<Book />} />
    </Routes>
  </BrowserRouter>
);
