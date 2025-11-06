// src/components/Header.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import styles from '../styles/Header.module.css';
import DropdownMenu from './DropdownMenu'; 

const dashboardLinks = [
    { title: 'Главная', path: '/' }, 
    { title: 'Проекты', path: '/dashboard/projects' },
    { title: 'Сотрудники', path: '/dashboard/employees' },
    { title: 'Публикации', path: '/dashboard/publications' },
    { title: 'Финансы', path: '/dashboard/finance' },
];

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const location = useLocation();
    const navigate = useNavigate(); // Используем для перенаправления после выхода

    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';
    const isAuthPage = isLoginPage || isRegisterPage;
    
    // ✅ 1. ЛОГИКА ДЛЯ ДАШБОРД-МЕНЮ (ТОЛЬКО ПОСЛЕ ВХОДА)
    const showDashboardNav = isLoggedIn; 
    
    // ✅ 2. ЛОГИКА ДЛЯ ДРОПДАУНОВ (ВСЕГДА, КРОМЕ СТРАНИЦ АВТОРИЗАЦИИ и страниц деталей дашборда, где они не нужны)
    const isDashboardDetailPage = location.pathname.startsWith('/dashboard/'); 
    const showFilterNav = !isAuthPage && !isDashboardDetailPage; 

    // ✅ 3. ЗАГОЛОВОК ДЛЯ АВТОРИЗАЦИИ
    let headerTitle = isRegisterPage ? 'Регистрация' : (isLoginPage ? 'Вход в личный кабинет' : '');

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Перенаправляем на главную страницу после выхода
        navigate('/'); 
    };

    return (
        <header className={styles.header}>
            
            {/* --- 1. ВЕРХНИЙ РЯД (Логотип, Дашборд-меню/Заголовок, Правая часть) --- */}
            <div className={styles.headerTop}>
                
                {/* Логотип DDM SU */}
                <Link to="/" className={styles.logoLink}> 
                    <div className={styles.logo}>DDM<span className={styles.highlightSu}>SU</span></div>
                    <div className={styles.subText}>DIGITAL DECISION-MAKING SYSTEM UNIFIED</div>
                </Link>
                
                {/* УСЛОВНЫЙ КОНТЕНТ В ЦЕНТРЕ */}
                {showDashboardNav ? (
                    // ✅ Дашборд-меню (Главная, Проекты...)
                    <nav className={styles.dashboardNav}>
                        {dashboardLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                // Активная ссылка в хедере выделяется желтым
                                className={`${styles.navLink} ${location.pathname.startsWith(link.path) && link.path !== '/' || location.pathname === link.path ? styles.activeLink : ''}`}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                ) : isAuthPage ? (
                    // ✅ Заголовок "Вход в личный кабинет"
                    <div className={styles.loginTitle}>
                        {headerTitle}
                    </div>
                ) : (
                    // Пустой блок для выравнивания, когда нет ни меню, ни заголовка
                    <div className={styles.emptySpace}></div>
                )}
                
                {/* Правая часть (Языки, ВОЙТИ/Иконка) */}
                <div className={styles.rightControls}>
                    <div className={styles.languageSelect}>
                        <span className={styles.activeLang}>KZ</span> / RU / EN
                    </div>
                    
                    {!isLoggedIn ? (
                        // Кнопка ВОЙТИ
                        <Link to="/login" className={styles.loginButton}> 
                             ВОЙТИ 
                        </Link>
                    ) : (
                        // Иконка пользователя (при входе)
                        <button className={styles.userIcon} onClick={handleLogout}>
                            👤
                        </button>
                    )}
                </div>
            </div>

            {/* --- 2. НИЖНИЙ РЯД (Дропдауны) --- */}
            {showFilterNav && (
                <div className={styles.filterNav}> 
                    <DropdownMenu title="РЕГИОН" items={['Область Абай', 'Город Алматы', '...']} />
                    <DropdownMenu title="НАПРАВЛЕНИЕ" items={['Label', 'Label', '...']} />
                    <DropdownMenu title="ОРГАНИЗАЦИЯ" items={['Назарбаев Университет', 'Астана IT', '...']} />
                </div>
            )}
            
        </header>
    );
};

export default Header;


