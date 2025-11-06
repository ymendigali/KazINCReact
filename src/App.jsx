import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import FilterPage from './pages/FilterPage';
import LoginPage from './pages/LoginPage.jsx'; // 👈 ИМПОРТ НОВОЙ СТРАНИЦЫ
import RegistrationPage from './pages/RegistrationPage.jsx'; // 👈 НОВЫЙ ИМПОРТ
import EcpConfirmationPage from './pages/EcpConfirmationPage.jsx'; // 👈 НОВЫЙ ИМПОРТ
import DashboardPage from './pages/DashboardPage.jsx';

function App() {
  // 1. Создаем состояние для отслеживания входа
  // Установите 'false' по умолчанию для отображения вида "до входа"
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const RootComponent = isLoggedIn ? DashboardPage : HomePage;

  return (
    <Router>
      <Header 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
      />
      
      <Routes>
        {/* ✅ ИСПРАВЛЕНИЕ: Используем RootComponent для условного рендеринга */}
        <Route path="/" element={<RootComponent isLoggedIn={isLoggedIn} />} />        
        <Route path="/filter" element={<FilterPage isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} /> {/* 👈 См. Ошибку 2 */}
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/ecp-confirm" element={<EcpConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;