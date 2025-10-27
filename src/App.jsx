import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FilterPage from './pages/FilterPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница (Desktop-1) */}
        <Route path="/" element={<HomePage view="desktop-1" />} /> 
        {/* Страница с открытым фильтром (Desktop-4) - Имитация, где MapSection показывает сайдбар */}
        <Route path="/filter" element={<FilterPage />} /> 
        {/* Страница Главная/Финансы (Desktop-5) */}
        <Route path="/finance-view" element={<HomePage view="desktop-5" />} /> 
      </Routes>
    </Router>
  );
}

export default App;