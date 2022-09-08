import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Second from './routes/Second';
import Third from './routes/Third'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/Second" element={<Second />}/>
    <Route path="/Third" element={<Third/>}/>
  </Routes>
  </BrowserRouter>
);