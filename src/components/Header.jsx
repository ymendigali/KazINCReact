import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // 👈 Импортируем useLocation
import styles from '../styles/Header.module.css';
import DropdownMenu from './DropdownMenu';

// Принимаем isLoggedIn и setIsLoggedIn для управления состоянием входа
const Header = ({ isLoggedIn, setIsLoggedIn }) => {

    // Получаем текущий маршрут
    const location = useLocation();
    // Проверяем, находится ли пользователь на странице аутентификации
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';
    const isAuthPage = isLoginPage || isRegisterPage;
    
    // ✅ ВЫЧИСЛЯЕМ ТЕКСТ ЗАГОЛОВКА
    let headerTitle = '';
    if (isRegisterPage) {
        headerTitle = 'Регистрация'; // Если '/register', то "Регистрация"
    } else if (isLoginPage) {
        headerTitle = 'Вход в личный кабинет'; // Если '/login', то "Вход в личный кабинет"
    }
    // Функция для имитации входа/выхода
    const handleLogin = () => {
        // Здесь должна быть реальная логика аутентификации,
        // но для макета просто переключаем состояние
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <header className={styles.header}>

            <div className={styles.logoContainer}>
             
                <div className={styles.logo}>
                    DDM<span className={styles.highlightSu}>SU</span>
                </div>
                <div className={styles.subText}>
                    DIGITAL DECISION-MAKING SYSTEM UNIFIED
                </div>
            
            </div>

            

            {/* ✅ 1. УСЛОВНЫЙ РЕНДЕРИНГ ДРОПДАУНОВ (ТОЛЬКО ЗДЕСЬ) */}
            {!isAuthPage && (
                <div className={styles.dropdownGroup}>
                    <DropdownMenu title="РЕГИОН" items={['Область Абай', 'Город Алматы', 'Label', 'Label', '...']} />
                    <DropdownMenu title="НАПРАВЛЕНИЕ" items={['Label', 'Label', '...']} />
                    <DropdownMenu title="ОРГАНИЗАЦИЯ" items={['Назарбаев Университет', 'Астана IT', '...']} />
                </div>
            )}
            
            {/* ✅ 2. ЗАГОЛОВОК "Вход в личный кабинет" ТОЛЬКО ДЛЯ СТРАНИЦЫ ВХОДА */}
            {isAuthPage && (
                <div className={styles.loginTitle}>
                    {headerTitle} 
                </div>
            )}
            
            {/* Языки (оставляем один раз) */}
            <div className={styles.languageSelect}>
                <span>KZ</span> / <span>RU</span> / <span>EN</span>
            </div>
            
            {/* ✅ 3. КНОПКА ВОЙТИ/ВЫЙТИ (Оставляем один блок с логикой) */}
            {!isLoggedIn ? (
                // Используем Link, чтобы перейти на страницу входа
                <Link to="/login" className={styles.login}> 
                    <i className="fa fa-user-circle"></i> ВОЙТИ 
                </Link>
            ) : (
                // Используем Button для выхода
                <button className={styles.login} onClick={handleLogin}>
                    ВЫЙТИ
                </button>
            )}
        </header>
    );
};

export default Header;