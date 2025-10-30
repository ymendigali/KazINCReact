import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FilterPage from './pages/FilterPage';
import LoginPage from './pages/LoginPage.jsx'; // 👈 ИМПОРТ НОВОЙ СТРАНИЦЫ
import RegistrationPage from './pages/RegistrationPage.jsx'; // 👈 НОВЫЙ ИМПОРТ
import EcpConfirmationPage from './pages/EcpConfirmationPage.jsx'; // 👈 НОВЫЙ ИМПОРТ

function App() {
  // 1. Создаем состояние для отслеживания входа
  // Установите 'false' по умолчанию для отображения вида "до входа"
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {/* 2. Передаем состояние и функцию изменения в Header */}
      <Header 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
      />
      
      <Routes>
        {/* Компонент HomePage также может использовать isLoggedIn для скрытия/показа элементов */}
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
        <Route path="/filter" element={<FilterPage isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/ecp-confirm" element={<EcpConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;